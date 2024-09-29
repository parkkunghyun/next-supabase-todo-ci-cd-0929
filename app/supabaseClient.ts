// supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://hvqztsrkpebbzelbdnbo.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2cXp0c3JrcGViYnplbGJkbmJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc0MzUyNzksImV4cCI6MjA0MzAxMTI3OX0.6DjbsOH-W6rSx7GCxQohi2JTmRwrR7jgFtCev8UjM20"

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
