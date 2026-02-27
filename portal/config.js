const SUPABASE_URL = 'https://mghouuvlnalodoxotqwo.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1naG91dXZsbmFsb2RveG90cXdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE3NTkzODYsImV4cCI6MjA4NzMzNTM4Nn0.ww6sepKzPrx46BbCAjFESpCX9B6eDJfoft08k8Xe2rw';
function requireAuth(allowedRoles) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
        window.location.href = 'login.html';
        return null;
    }
    if (allowedRoles && !allowedRoles.includes(user.role)) {
        window.location.href = 'login.html';
        return null;
    }
    return user;
}