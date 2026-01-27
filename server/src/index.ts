import { connectToDatabase } from "./database";
import { app } from "./express";

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await connectToDatabase();

    // Запускаем сервер
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

    // Graceful shutdown
    // process.on("SIGINT", async () => {
    //   await closeDatabaseConnection();
    //   process.exit(0);
    // });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
