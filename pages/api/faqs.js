// API endpoint for FAQ management
// GET /api/faqs - Fetch all FAQs
// POST /api/faqs - Create new FAQ (admin only)
// PUT /api/faqs/[id] - Update FAQ (admin only)
// DELETE /api/faqs/[id] - Delete FAQ (admin only)

export default function handler(req, res) {
  const { method } = req;

  // Sample FAQ data structure
  const sampleFaqs = [
    {
      id: 1,
      category: 'Getting Started',
      question: 'How do I book a service on Searchbook?',
      answer: 'Booking a service is simple! Browse our 50+ service categories, select your preferred provider, choose your time slot, and pay a small visiting charge of ₵20-60. The professional will visit your location, assess the work, and provide a transparent quote before starting.',
      isActive: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 2,
      category: 'Getting Started',
      question: 'What is the visiting charge and why do I need to pay it?',
      answer: 'The visiting charge (₵20-60) covers the professional\'s time and travel costs to assess your service needs. This ensures serious bookings and allows providers to give you accurate quotes. The final service cost is separate and determined after the assessment.',
      isActive: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ];

  switch (method) {
    case 'GET':
      // In production, fetch from database
      res.status(200).json({
        success: true,
        data: sampleFaqs,
        message: 'FAQs retrieved successfully'
      });
      break;

    case 'POST':
      // In production, validate admin authentication
      const { category, question, answer } = req.body;
      
      if (!category || !question || !answer) {
        return res.status(400).json({
          success: false,
          message: 'Category, question, and answer are required'
        });
      }

      // In production, save to database
      const newFaq = {
        id: Date.now(),
        category,
        question,
        answer,
        isActive: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      res.status(201).json({
        success: true,
        data: newFaq,
        message: 'FAQ created successfully'
      });
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}