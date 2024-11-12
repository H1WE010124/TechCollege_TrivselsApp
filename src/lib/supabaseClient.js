import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://upaefexjodbfrgqueyny.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwYWVmZXhqb2RiZnJncXVleW55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzExODU4NjUsImV4cCI6MjA0Njc2MTg2NX0.JGaYk-i7ErIfRlJmOrwdPemAZFuEogyMSCYt-UCICUI"
);
