import { Router, type Request } from "express";
import { db } from "./database.ts";
import type { GroupWord, GroupWordPayload, Id } from "./types.ts";

export const router = Router();

router.get("/group-words", async (req: Request<{}, any, {}>, res) => {
  const result = await db.selectAll();

  res.json(result);
});

router.get("/group-words/:id", async (req: Request<Id, any, {}>, res) => {
  const { id } = req.params;

  const result = await db.selectBy(id);

  res.json(result);
});

router.post(
  "/group-words",
  async (req: Request<{}, any, GroupWordPayload>, res) => {
    const payload = req.body;

    const result = await db.insert(payload);

    res.json(result);
  },
);

router.patch(
  "/group-words/:id",
  async (req: Request<Id, any, GroupWordPayload>, res) => {
    const { id } = req.params;
    const payload = req.body;

    const result = await db.update(id, payload);

    res.json(result);
  },
);

router.delete("/group-words/:id", async (req: Request<Id, any, {}>, res) => {
  const { id } = req.params;

  const result = await db.delete(id);

  res.json(result);
});
