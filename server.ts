import express from 'express';
import { createServer as createViteServer } from 'vite';
import { createServer as createHttpServer } from 'http';
import { Server } from 'socket.io';
import path from 'path';

async function startServer() {
  const app = express();
  const httpServer = createHttpServer(app);
  const PORT = process.env.PORT || 3000;
  
  // Attach socket.io
  const io = new Server(httpServer, {
    cors: { origin: '*' }
  });

  app.use(express.json());

  // API Routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', time: new Date() });
  });

  // Simulator for active threats over websockets
  io.on('connection', (socket) => {
    console.log('Client connected to socket');
    
    // Periodically send threat updates to connected clients
    const interval = setInterval(() => {
      const threatTypes = ['SQL Injection', 'DDoS Attempt', 'Brute Force', 'Malware Payload', 'Zero-day Exploit'];
      const origins = ['RU', 'CN', 'US', 'KP', 'IR', 'BR'];
      const actions = ['Blocked', 'Quarantined', 'Flagged', 'Monitoring'];
      
      const newThreat = {
        id: Math.random().toString(36).substring(2, 9),
        type: threatTypes[Math.floor(Math.random() * threatTypes.length)],
        origin: origins[Math.floor(Math.random() * origins.length)],
        target: `192.168.1.${Math.floor(Math.random() * 255)}`,
        action: actions[Math.floor(Math.random() * actions.length)],
        severity: Math.random() > 0.8 ? 'CRITICAL' : (Math.random() > 0.4 ? 'HIGH' : 'MEDIUM'),
        timestamp: new Date().toISOString()
      };
      
      socket.emit('threat_update', newThreat);
    }, 3000); // Send an update every 3 seconds
    
    socket.on('disconnect', () => {
      clearInterval(interval);
    });
  });

  // Vite development middleware
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production static files
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  httpServer.listen(Number(PORT), "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
