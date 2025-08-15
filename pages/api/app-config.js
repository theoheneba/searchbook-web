// API endpoint for mobile app configuration
// GET /api/app-config - Fetch app configuration (mockup images, download links)
// PUT /api/app-config - Update app configuration (admin only)

export default function handler(req, res) {
  const { method } = req;

  // Sample app configuration data structure
  const sampleAppConfig = {
    id: 1,
    mockupImages: {
      user: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      partner: 'https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      courier: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      vendor: 'https://images.pexels.com/photos/5625115/pexels-photo-5625115.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop'
    },
    heroImages: {
      userApp: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
      partnerApp: 'https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
      courierApp: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
      vendorApp: 'https://images.pexels.com/photos/5625115/pexels-photo-5625115.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop'
    },
    downloadLinks: {
      appStore: {
        user: 'https://apps.apple.com/app/searchbook-user',
        partner: 'https://apps.apple.com/app/searchbook-partner',
        courier: 'https://apps.apple.com/app/searchbook-courier',
        vendor: 'https://apps.apple.com/app/searchbook-vendor'
      },
      googlePlay: {
        user: 'https://play.google.com/store/apps/details?id=com.searchbook.user',
        partner: 'https://play.google.com/store/apps/details?id=com.searchbook.partner',
        courier: 'https://play.google.com/store/apps/details?id=com.searchbook.courier',
        vendor: 'https://play.google.com/store/apps/details?id=com.searchbook.vendor'
      }
    },
    paymentMethods: {
      mobileMoneyImage: 'https://sooswift.com/wp-content/uploads/2021/11/mobile-money-1.png',
      acceptedMethods: [
        'MTN Mobile Money',
        'Vodafone Cash',
        'AirtelTigo Money',
        'Credit Cards',
        'Debit Cards',
        'Bank Transfers'
      ]
    },
    lastUpdated: new Date().toISOString()
  };

  switch (method) {
    case 'GET':
      res.status(200).json({
        success: true,
        data: sampleAppConfig,
        message: 'App configuration retrieved successfully'
      });
      break;

    case 'PUT':
      // In production, validate admin authentication
      const { mockupImages, heroImages, downloadLinks, paymentMethods } = req.body;
      
      // In production, update in database
      const updatedConfig = {
        ...sampleAppConfig,
        mockupImages: mockupImages || sampleAppConfig.mockupImages,
        heroImages: heroImages || sampleAppConfig.heroImages,
        downloadLinks: downloadLinks || sampleAppConfig.downloadLinks,
        paymentMethods: paymentMethods || sampleAppConfig.paymentMethods,
        lastUpdated: new Date().toISOString()
      };

      res.status(200).json({
        success: true,
        data: updatedConfig,
        message: 'App configuration updated successfully'
      });
      break;

    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}