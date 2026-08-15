import { Router, type Request } from "express";
import { wordsDatabase } from "./database.ts";

export const router = Router();

router.get("/group-word", async (req: Request<{}, any, {}>, res) => {
  const groupWords = await wordsDatabase.getGroupWords();

  // res.json(groupWords);

  res.json({ message: "Group word all" });
});

router.post(
  "/group-word",
  async (req: Request<{}, any, { groupWord: string }>, res) => {
    const { groupWord } = req.body;

    //await wordsDatabase.deleteGroupWord(id);

    res.json({ message: "Group word created:" + groupWord });
  },
);

router.patch(
  "/group-word",
  async (req: Request<{}, any, { id: string; groupWord: string }>, res) => {
    const { id, groupWord } = req.body;

    //await wordsDatabase.deleteGroupWord(id);

    res.json({ message: "Group word updated" });
  },
);

router.delete(
  "/group-word",
  async (req: Request<{}, any, { id: string }>, res) => {
    const { id } = req.body;

    // await wordsDatabase.deleteGroupWord(id);

    res.json({ message: "Group word deleted" });
  },
);
