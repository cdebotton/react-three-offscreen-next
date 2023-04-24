'use client';

import { Canvas } from '@react-three/offscreen';
import { useEffect, useState } from 'react';

export default function App() {
  const [worker, setWorker] = useState<Worker | null>(null);

  useEffect(() => {
    if (!worker) {
      setWorker(new Worker(new URL('./worker.js', import.meta.url)));
    }
  }, [worker]);

  return worker && <Canvas worker={worker} />;
}
