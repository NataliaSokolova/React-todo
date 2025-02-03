import React from 'react';

const Home = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>👋 Welcome to ToDo App!</h1>
      <p>
        Todo app is not just an editor; it's your personal assistant. 💡
      </p>
      <h2>Here, you can:</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>Capture everything that comes to mind: from brilliant ideas to everyday tasks.</li>
        <li>Organize your thoughts: create lists, notes, drafts—everything you need for productivity.</li>
      </ul>
      <p>🚀 Start your journey towards effective work and creative self-expression right now! 🚀</p>
      <h2>Why Choose ToDo App?</h2>
      <p>
        With Todo app, you can transform your chaotic thoughts into structured plans. Whether you're 
        brainstorming for a project, jotting down daily tasks, it is designed to enhance your productivity and creativity.
      </p>
    </div>
  );
};

export default Home;