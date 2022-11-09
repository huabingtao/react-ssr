import * as React from 'react'
import RequireAuth from '../../components/RequireAuth';

export default function About() {
  return (
    <div>
      <RequireAuth>
        <h2>About</h2>
      </RequireAuth>
    </div>
  );
}