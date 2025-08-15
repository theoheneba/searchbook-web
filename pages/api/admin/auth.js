// API endpoint for admin authentication
// POST /api/admin/auth - Admin login
// GET /api/admin/auth - Verify admin token

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'POST':
      const { email, password } = req.body;
      
      if (!email || !password) {
        return res.status(400).json({
          success: false,
          message: 'Email and password are required'
        });
      }

      // In production, validate against database
      // This is a sample implementation
      if (email === 'admin@searchbook.com' && password === 'admin123') {
        // In production, generate JWT token
        const token = 'sample-jwt-token-' + Date.now();
        
        res.status(200).json({
          success: true,
          data: {
            token,
            user: {
              id: 1,
              email: 'admin@searchbook.com',
              role: 'admin',
              name: 'Admin User'
            }
          },
          message: 'Login successful'
        });
      } else {
        res.status(401).json({
          success: false,
          message: 'Invalid credentials'
        });
      }
      break;

    case 'GET':
      const authHeader = req.headers.authorization;
      
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
          success: false,
          message: 'No token provided'
        });
      }

      const token = authHeader.substring(7);
      
      // In production, verify JWT token
      if (token.startsWith('sample-jwt-token-')) {
        res.status(200).json({
          success: true,
          data: {
            user: {
              id: 1,
              email: 'admin@searchbook.com',
              role: 'admin',
              name: 'Admin User'
            }
          },
          message: 'Token valid'
        });
      } else {
        res.status(401).json({
          success: false,
          message: 'Invalid token'
        });
      }
      break;

    default:
      res.setHeader('Allow', ['POST', 'GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}