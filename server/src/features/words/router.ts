import express from "express";
import { wordsDatabase } from "./database";

const router = express.Router();

router.post("/group-words/all", async (req, res) => {
  const groupWords = await wordsDatabase.getGroupWords();

  res.json(groupWords);
});

router.post("/group-words/add", async (req, res) => {
  const { groupWord } = req.body;
  await wordsDatabase.addGroupWord(groupWord);

  res.json({ message: "Group word added" });
});

router.post("/group-words/delete", async (req, res) => {
  const { id } = req.body;

  await wordsDatabase.deleteGroupWord(id);

  res.json({ message: "Group word deleted" });
});

export default router;
