// Replace with your Supabase credentials
const supabaseUrl = "https://gdczwaetelzhkekypcbv.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkY3p3YWV0ZWx6aGtla3lwY2J2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5ODQzNzksImV4cCI6MjA1ODU2MDM3OX0.YlR6t9TYIG8Lvu2B65VS_V0xIBAKtnLT5qWfaiRkvlk";

// Initialize Supabase client
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);
