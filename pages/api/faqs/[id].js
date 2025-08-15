// API endpoint for individual FAQ management
// GET /api/faqs/[id] - Fetch specific FAQ
// PUT /api/faqs/[id] - Update specific FAQ (admin only)
// DELETE /api/faqs/[id] - Delete specific FAQ (admin only)

export default function handler(req, res) {
  const { method, query } = req;
  const { id } = query;

  switch (method) {
    case 'GET':
      // In production, fetch from database by ID
      res.status(200).json({
        success: true,
        data: {
          id: parseInt(id),
          category: 'Getting Started',
          question: 'Sample question',
          answer: 'Sample answer',
          isActive: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        message: 'FAQ retrieved successfully'
      });
      break;

    case 'PUT':
      // In production, validate admin authentication
      const { category, question, answer, isActive } = req.body;
      
      // In production, update in database
      res.status(200).json({
        success: true,
        data: {
          id: parseInt(id),
          category,
          question,
          answer,
          isActive,
          updatedAt: new Date().toISOString()
        },
        message: 'FAQ updated successfully'
      });
      break;

    case 'DELETE':
      // In production, validate admin authentication
      // In production, delete from database
      res.status(200).json({
        success: true,
        message: 'FAQ deleted successfully'
      });
      break;

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}