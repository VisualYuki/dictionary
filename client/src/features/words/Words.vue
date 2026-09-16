<template>
  <div>
    <div v-for="groupWord in groupWords" :key="groupWord.id">
      <template v-if="editingId === groupWord.id">
        <el-input v-model="editInput" style="width: 240px" placeholder="word" />
        <el-button @click="saveUpdate(groupWord.id)">save</el-button>
        <el-button @click="cancelUpdate">cancel</el-button>
      </template>
      <template v-else>
        {{ groupWord.word }}
        <el-button @click="startUpdate(groupWord)">update</el-button>
        <el-button @click="deleteGroupWord(groupWord.id)">delete</el-button>
      </template>
    </div>
    <el-input v-model="input" style="width: 240px" placeholder="new word" />
    <el-button @click="addGroupWord">Add</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { GroupWord } from '../../../../shared/types'
import { api } from './api'

const groupWords = ref<GroupWord[]>([])
const input = ref<string>('')
const editingId = ref<number | null>(null)
const editInput = ref<string>('')

async function allGroupWords() {
  groupWords.value = await api.all()
}

async function addGroupWord() {
  if (!input.value) return

  await api.add(input.value)
  input.value = ''
  await allGroupWords()
}

async function deleteGroupWord(id: number) {
  await api.remove(id)
  await allGroupWords()
}

function startUpdate(groupWord: GroupWord) {
  editingId.value = groupWord.id
  editInput.value = groupWord.word
}

function cancelUpdate() {
  editingId.value = null
  editInput.value = ''
}

async function saveUpdate(id: number) {
  await api.update(id, editInput.value)
  editingId.value = null
  editInput.value = ''
  await allGroupWords()
}

allGroupWords()
</script>

<style></style>
