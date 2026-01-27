<template>
  <div>
    <div v-for="groupWord in groupWords" :key="groupWord.id">
      {{ groupWord['groupWord'] }}
      <el-button @click="deleteGroupWord(groupWord)">delete</el-button>
      <el-button @click="deleteGroupWord(groupWord)">update</el-button>
    </div>
    <el-input v-model="input" style="width: 240px" placeholder="new group word" />
    <el-button @click="addGroupWord">Add</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { type GroupWord } from '../../../../shared/types'
import { api } from './api'

const groupWords = ref<GroupWord[]>([])
const input = ref<string>('')

function allGroupWords() {
  api.all().then((response) => {
    groupWords.value = response
  })
}

allGroupWords()

const addGroupWord = () => {
  api.add(input.value).then((response) => {
    groupWords.value.push(response)
    input.value = ''
    allGroupWords()
  })
}

const deleteGroupWord = (groupWord: GroupWord) => {
  api.delete(groupWord.id).then(() => {
    allGroupWords()
  })
}
</script>

<style></style>
