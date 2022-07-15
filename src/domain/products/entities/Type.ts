import crypto from "crypto";

class Type {
  id?: string;
  name: string;
  description: string;

  constructor() {
    if (!this.id) {
      this.id = crypto.randomUUID();
    }
  }
}

export { Type };
