const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/cyber-heroes.db");

export default function handler(req, res) {
  if (req.method === "GET") {
    db.all("SELECT * FROM questions", [], (err, rows) => {
      if (err) {
        console.error("Database error:", err);
        res.status(500).json({ error: "Failed to fetch questions" });
        return;
      }

      const parsedRows = rows.map((row) => {
        let answers = [];
        try {
          if (typeof row.answers === "string") {
            answers = JSON.parse(row.answers); 
          }
        } catch (error) {
          console.error(`Error parsing JSON for question ID ${row.id}:`, error);
        }

        return {
          id: row.id,
          question: row.question,
          point: row.point,
          correctAnswer: row.correctAnswer,
          answers: answers,
        };
      });

      res.status(200).json(parsedRows);
    });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
