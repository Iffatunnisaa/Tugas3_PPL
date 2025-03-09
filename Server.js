const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, "characters.json");

app.use(bodyParser.json());
app.use(express.static(__dirname));

// Fungsi membaca database dari file JSON
const readDatabase = () => {
    if (!fs.existsSync(DATA_FILE)) return [];
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
};

// Fungsi menyimpan database ke file JSON
const saveDatabase = (data) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

// Dummy data awal jika file belum ada
if (!fs.existsSync(DATA_FILE)) {
    saveDatabase([
        { id: 1, name: "Luffy", anime: "One Piece", age: 19 },
        { id: 2, name: "Naruto", anime: "Naruto", age: 17 },
        { id: 3, name: "Goku", anime: "Dragon Ball", age: 35 }
    ]);
}

// **API GET semua karakter**
app.get("/characters", (req, res) => {
    res.json({ data: readDatabase() });
});

// **API POST untuk menambahkan karakter baru**
app.post("/characters", (req, res) => {
    let characters = readDatabase();
    const { name, anime, age } = req.body;
    if (!name || !anime || !age) {
        return res.status(400).json({ message: "Please provide name, anime, and age" });
    }

    const newCharacter = {
        id: characters.length ? characters[characters.length - 1].id + 1 : 1,
        name,
        anime,
        age
    };

    characters.push(newCharacter);
    saveDatabase(characters);
    res.status(201).json({ message: "Character added", character: newCharacter });
});

// **API PUT untuk mengupdate karakter**
app.put("/characters/:id", (req, res) => {
    let characters = readDatabase();
    const characterId = parseInt(req.params.id);
    const { name, anime, age } = req.body;

    const character = characters.find(c => c.id === characterId);
    if (!character) {
        return res.status(404).json({ message: "Character not found" });
    }

    character.name = name || character.name;
    character.anime = anime || character.anime;
    character.age = age || character.age;

    saveDatabase(characters);
    res.json({ message: "Character updated", character });
});

// **API DELETE untuk menghapus karakter**
app.delete("/characters/:id", (req, res) => {
    let characters = readDatabase();
    const characterId = parseInt(req.params.id);
    characters = characters.filter(c => c.id !== characterId);

    saveDatabase(characters);
    res.json({ message: "Character deleted" });
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
