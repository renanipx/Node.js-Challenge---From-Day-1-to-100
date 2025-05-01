// Simulating webhook handling (e.g., from Stripe, GitHub, etc.)

exports.handleWebhook = (req, res) => {
    const event = req.body;
  
    console.log("🔔 Received webhook event:", event);
  
    // Simulate processing the event
    switch (event.type) {
      case 'user.created':
        console.log(`✅ New user created: ${event.data.email}`);
        break;
  
      case 'order.completed':
        console.log(`📦 Order completed: ${event.data.orderId}`);
        break;
  
      default:
        console.log(`⚠️ Unhandled event type: ${event.type}`);
    }
  
    res.status(200).json({ received: true });
  };
  