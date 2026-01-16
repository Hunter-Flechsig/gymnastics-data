import { z } from "zod";
import fs from "fs";
import path from "path";

const Skill = z.object({
  box_num: z.number(),
  sv: z.number().min(0).max(1),
  desc: z.string(),
  name: z.string().optional(),
  altNames: z.array(z.string()).optional(),
  image: z.string().url().optional(),
});

const FileSchema = z.object({
  last_updated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  event: z.string(),
  1: z.array(Skill).optional(),
  2: z.array(Skill).optional(),
  3: z.array(Skill).optional(),
  4: z.array(Skill).optional(),
});

type Skill = z.infer<typeof Skill>;
type SkillFile = z.infer<typeof FileSchema>;

function validateFiles(dir: string) {
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".json"));
  for (const file of files) {
    const content = fs.readFileSync(path.join(dir, file), "utf-8");
    try {
      const data = JSON.parse(content);
      FileSchema.parse(data);
      console.log(`✅ ${file} OK`);
    } catch (e) {
      console.error(`❌ ${file}:`, e);
      process.exit(1);
    }
  }
}

validateFiles("./data/skills");
