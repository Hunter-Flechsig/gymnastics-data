# Gymnastics Code of Points Data

This repository hosts structured **skill data and images** for the Men's Artistic Gymnastics Code of Points (2025‑2028).  
It serves as a **static, validated data source** for client applications such as routine builders and scoring tools.

## 📦 Repository Structure

gymnastics-data/

├── skills/ # JSON files per event (fx.json, ph.json, etc.)

├── images/ # Optional skill diagrams or icons

├── schema.json # JSON schema for validation

├── verify.ts # Local + CI validation script

└── .github/workflows/deploy.yml # GitHub Actions: validate + deploy to Pages

## ⚙️ Validation & Deployment

Each push to the `main` branch triggers a GitHub Actions workflow that:

1. Installs dependencies
2. Runs `verify.ts` to validate all JSON skill data against `schema.json`
3. Deploys the `skills/` and `images/` folders to **GitHub Pages** if validation passes

The live data is automatically available via:
https://<username>.github.io/gymnastics-data/skills/

Example: https://<username>.github.io/gymnastics-data/skills/fx.json

## 🧪 Local Usage

Validate structure before pushing updates:

```bash
npm install
npx tsx verify.ts
```

If all files pass validation, they can be pushed and will auto‑deploy via GitHub Pages.

📄 License

MIT © Hunter Flechsig

Use freely for research, training, and software development related to gymnastics scoring.
