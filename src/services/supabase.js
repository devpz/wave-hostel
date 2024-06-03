import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://tyyacuzzpxcxityamjzf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5eWFjdXp6cHhjeGl0eWFtanpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0MTk2MTMsImV4cCI6MjAzMjk5NTYxM30.6XwPWCcV__Hxo7KNQWpAeMGjj306UtGpLM7wPL3DwSg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
