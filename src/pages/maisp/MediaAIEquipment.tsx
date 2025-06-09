
import React from 'react';
import { motion } from 'framer-motion';

const MediaAIEquipment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A0D33] to-black font-sora">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center text-[#E0BBE4] mb-8"
        >
          WhitegloveAI MediaAI Setup
        </motion.h1>

        {/* Introduction */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center text-white text-lg md:text-xl mb-12 leading-relaxed"
        >
          Welcome, content creator! You're about to embark on an exciting journey into high-quality digital media. 
          This guide will gently walk you through setting up your new WhitegloveAI MediaAI studio, ensuring everything 
          is <span className="text-[#E0BBE4] font-bold">purr-fectly ready</span> for Evmux. Let's make some magic!
        </motion.p>

        {/* Section 1: Shure MV7i Setup */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#E0BBE4] mb-6">Your Voice, Amplified: Shure MV7i & Boom Arm Setup</h2>
          <p className="text-white text-lg mb-8">
            The <span className="text-[#E0BBE4] font-bold">Shure MV7i</span> is truly a clever companion, packing a fantastic microphone 
            and its own audio interface into one sleek device. This means less fuss and more amazing audio for you!
          </p>

          <h3 className="text-2xl font-semibold text-white mb-4">Getting Your MV7i Ready on the Boom Arm:</h3>
          <ul className="text-white space-y-3 mb-8">
            <li>• First, let's unbox your stylish <span className="text-[#E0BBE4] font-bold">Shure by Gator Deluxe Articulating Desktop Podcasting Mic Boom Arm</span>. So professional!</li>
            <li>• If there's a pre-attached mic clip, gently unscrew it – we're making room for your MV7i.</li>
            <li>• Now, find the threaded mount at the very bottom of your Shure MV7i Smart Microphone.</li>
            <li>• Carefully, with a little twist, screw your MV7i onto the boom arm's threaded stud. Make it feel secure, but a gentle 'finger-tight' is all it needs – no need to overtighten!</li>
          </ul>
          
          <div className="bg-gray-500 p-8 rounded-lg mb-8 text-center italic text-gray-300">
            [Pic of MV7i attached to boom arm]
          </div>

          <h3 className="text-2xl font-semibold text-white mb-4">Mounting the Boom Arm to Your Desk:</h3>
          <ul className="text-white space-y-3 mb-8">
            <li>• Pick your favorite spot on your desk's edge for the boom arm's clamp base. Choose a location where the microphone can easily swing into position, right in front of you.</li>
            <li>• Give the clamp a good, firm tighten. You want it secure, so your mic stays exactly where you want it, no wiggles!</li>
            <li>• <span className="text-[#E0BBE4] font-bold">Psst:</span> We'll personalize the mic's exact placement after you share your desk layout. That's where the real magic happens!</li>
          </ul>

          <div className="bg-gray-500 p-8 rounded-lg mb-8 text-center italic text-gray-300">
            [Pic of boom arm clamped to desk]
          </div>

          <h3 className="text-2xl font-semibold text-white mb-4">Connecting Your MV7i to Your MacBook:</h3>
          <ul className="text-white space-y-3 mb-8">
            <li>• Spot the USB-C port nestled on the back of your Shure MV7i.</li>
            <li>• Grab the included USB-C cable (or your own trusted one!) and connect one end to the MV7i, and the other directly to a USB-C port on your MacBook.</li>
            <li>• <span className="text-[#E0BBE4] font-bold">Isn't it smart?</span> Your MV7i gets all the power it needs right from your computer – simple and sweet!</li>
          </ul>

          <div className="bg-gray-500 p-8 rounded-lg mb-8 text-center italic text-gray-300">
            [Pic of USB-C cable connected from MV7i to MacBook]
          </div>

          <h3 className="text-2xl font-semibold text-white mb-4">Unleash More Power with ShurePlus MOTIV Mix Desktop App (Highly Recommended!):</h3>
          <ul className="text-white space-y-3 mb-8">
            <li>• Head over to the official Shure website (shure.com) and download the <span className="text-[#E0BBE4] font-bold">ShurePlus MOTIV Mix Desktop App</span> tailored for macOS.</li>
            <li>• Install it with a smile! This incredible app is your control center, allowing you to fine-tune gain, EQ, monitoring mix, and activate fantastic features like Auto Level Mode and SmartGate for truly pristine audio.</li>
          </ul>

          <div className="bg-gray-500 p-8 rounded-lg mb-8 text-center italic text-gray-300">
            [Pic of MOTIV Mix App interface]
          </div>

          <h3 className="text-2xl font-semibold text-white mb-4">Your First Sound Check:</h3>
          <ul className="text-white space-y-3 mb-8">
            <li>• Once connected, your MacBook should give a friendly nod to the MV7i. Head to System Settings > Sound > Input.</li>
            <li>• Select <span className="text-[#E0BBE4] font-bold">'Shure MV7i'</span> as your input device – you're almost there!</li>
            <li>• Now, plug your favorite headphones into the headphone jack on the back of the MV7i.</li>
            <li>• Speak naturally into the microphone. Watch the input level meter in System Settings dance! You want it to mostly stay in the 'good' range, happily avoiding the red zone (that means distortion, and we don't like clipping!). Adjust the gain on the MV7i itself (via its touch panel or the MOTIV Mix app) until your levels are just right.</li>
          </ul>

          <div className="bg-gray-500 p-8 rounded-lg mb-8 text-center italic text-gray-300">
            [Pic of MacBook Sound Input settings showing MV7i selected]
          </div>
        </motion.section>

        {/* Section 2: Logitech MX Brio Setup */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#E0BBE4] mb-6">Your Vision, Captured: Logitech MX Brio 4K Webcam Setup</h2>
          <p className="text-white text-lg mb-8">
            The <span className="text-[#E0BBE4] font-bold">Logitech MX Brio</span> is here to make your podcast look as crisp and clear as your ideas!
          </p>

          <h3 className="text-2xl font-semibold text-white mb-4">Mounting Your MX Brio:</h3>
          <ul className="text-white space-y-3 mb-8">
            <li>• Your MX Brio comes with a super clever mount. Gently place it securely on top of your monitor, laptop screen, or even on a small desktop tripod if that's your preferred vantage point. Just ensure it's stable and beautifully facing you.</li>
          </ul>

          <div className="bg-gray-500 p-8 rounded-lg mb-8 text-center italic text-gray-300">
            [Pic of MX Brio mounted on a monitor]
          </div>

          <h3 className="text-2xl font-semibold text-white mb-4">Connecting Your MX Brio to Your MacBook:</h3>
          <ul className="text-white space-y-3 mb-8">
            <li>• Using the provided USB-C to USB-C cable (or the USB-C to USB-A adapter if your computer prefers), connect your MX Brio directly to an available USB port on your MacBook. <span className="text-[#E0BBE4] font-bold">Easy peasy!</span></li>
          </ul>

          <div className="bg-gray-500 p-8 rounded-lg mb-8 text-center italic text-gray-300">
            [Pic of MX Brio USB cable connected to MacBook]
          </div>

          <h3 className="text-2xl font-semibold text-white mb-4">Refining Your Look with Logi Options+ (Highly Recommended!):</h3>
          <ul className="text-white space-y-3 mb-8">
            <li>• Download the <span className="text-[#E0BBE4] font-bold">Logi Options+</span> software from Logitech's official website.</li>
            <li>• This powerful software is like having your own personal video director! It lets you fine-tune your webcam's settings, from resolution and field of view to brightness, contrast, and color balance. Get ready to look amazing!</li>
          </ul>

          <div className="bg-gray-500 p-8 rounded-lg mb-8 text-center italic text-gray-300">
            [Pic of Logi Options+ interface]
          </div>

          <h3 className="text-2xl font-semibold text-white mb-4">Your First Visual Check:</h3>
          <ul className="text-white space-y-3 mb-8">
            <li>• Open any application that uses your webcam (like Photo Booth, Zoom, or even Evmux itself!).</li>
            <li>• Head to System Settings > Camera. Confirm that <span className="text-[#E0BBE4] font-bold">'Logitech MX Brio'</span> is happily selected.</li>
            <li>• Take a peek at your video feed. Are you looking fantastic and ready for your close-up?</li>
          </ul>

          <div className="bg-gray-500 p-8 rounded-lg mb-8 text-center italic text-gray-300">
            [Pic of MacBook Camera settings showing MX Brio selected]
          </div>
        </motion.section>

        {/* Section 3: Neewer LED Lights Setup */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#E0BBE4] mb-6">Your Glow-Up: Neewer USB LED Video Lights (2-Pack) Setup</h2>
          <p className="text-white text-lg mb-8">
            <span className="text-[#E0BBE4] font-bold">Shine bright like a diamond!</span> Fantastic lighting is the secret sauce for professional-looking video. 
            With two lights, you'll create a flattering, captivating look that truly sets you apart.
          </p>

          <h3 className="text-2xl font-semibold text-white mb-4">Assembling and Positioning Your Lights:</h3>
          <ul className="text-white space-y-3 mb-6">
            <li>• Unbox your <span className="text-[#E0BBE4] font-bold">Neewer 2-Pack Dimmable 5600K USB LED Video Lights</span> and assemble them following their simple instructions.</li>
            <li>• Attach each sleek light panel to its mini tripod stand.</li>
            <li>• <span className="text-[#E0BBE4] font-bold">Placement is everything!</span>
              <ul className="ml-6 mt-2 space-y-2">
                <li>- Place one light slightly to your left-front (imagine a 45-degree angle from your camera). This is your powerful 'key light' – it defines your features!</li>
                <li>- Position the second light slightly to your right-front (another 45-degree angle, mirroring your key light). This is your gentle 'fill light' – it softly reduces shadows for a balanced glow.</li>
              </ul>
            </li>
            <li>• Adjust the height and angle of each light so they lovingly illuminate your face, banishing harsh shadows. Try to avoid pointing them straight at you, as that can flatten your features. We want that beautiful dimension!</li>
            <li>• Connect each light to an available USB port on your MacBook or a trusty USB wall adapter/power bank.</li>
          </ul>

          <div className="bg-gray-500 p-8 rounded-lg mb-8 text-center italic text-gray-300">
            [Pic of two Neewer lights positioned on desk for lighting]
          </div>

          <h3 className="text-2xl font-semibold text-white mb-4">Dialing in Brightness and Color:</h3>
          <ul className="text-white space-y-3 mb-8">
            <li>• Switch on both lights! If they have adjustable brightness, play around until you find a comfortable, bright, yet soft glow on your face.</li>
            <li>• The <span className="text-[#E0BBE4] font-bold">5600K color temperature</span> is designed to mimic natural daylight, which is absolutely perfect for video. Make sure both lights are set consistently for a beautifully uniform glow.</li>
          </ul>

          <div className="bg-gray-500 p-8 rounded-lg mb-8 text-center italic text-gray-300">
            [Pic of the lights turned on and illuminating a person]
          </div>
        </motion.section>

        {/* Section 4: Background Setup */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#E0BBE4] mb-6">Crafting Your Canvas: Background Setup Tips</h2>
          <p className="text-white text-lg mb-8">
            Your background isn't just space; it's your personal studio canvas! A thoughtfully arranged backdrop enhances your professionalism 
            and helps tell your story without any visual distractions. <span className="text-[#E0BBE4] font-bold">Let's make it speak volumes about you!</span>
          </p>

          <h3 className="text-2xl font-semibold text-white mb-4">Embrace the Power of Simplicity:</h3>
          <ul className="text-white space-y-3 mb-8">
            <li>• The golden rule for backgrounds: <span className="text-[#E0BBE4] font-bold">less is almost always more!</span> Gently remove anything that looks cluttered, messy, or might pull attention away from your amazing self. Think clean, organized, and inviting.</li>
            <li>• Steer clear of overly busy patterns or super bright objects that could become visual competition.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-white mb-4">Create Lovely Depth & Dimension:</h3>
          <ul className="text-white space-y-3 mb-8">
            <li>• Don't snuggle too close to a wall! Try to have a little space (ideally 2-3 feet) between you and your background. This magical gap allows your webcam to create a delightful, slightly blurred background effect, making you truly pop!</li>
            <li>• Your <span className="text-[#E0BBE4] font-bold">Logitech MX Brio's fantastic 4K resolution</span>, combined with your perfect lighting, will capture this wonderful depth beautifully.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-white mb-4">Infuse Your Unique Personality (Subtly!):</h3>
          <ul className="text-white space-y-3 mb-8">
            <li>• Consider adding a few carefully chosen items that whisper about your brand or passions. Perhaps a neatly arranged bookshelf, a vibrant plant, a tasteful piece of art, or even a subtle, branded accent.</li>
            <li>• The key is 'subtle.' Ensure any items are thoughtfully placed and enhance, rather than detract from, your presence.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-white mb-4">Beware of Sneaky Reflections:</h3>
          <ul className="text-white space-y-3 mb-8">
            <li>• Keep an eye out for windows or shiny surfaces behind you that could throw off distracting glare or reflections from your beautiful lighting. A slight adjustment to your position or the lights can work wonders to minimize these.</li>
          </ul>

          <div className="bg-[#E0BBE4]/10 border-l-4 border-[#E0BBE4] p-6 rounded-r-lg mb-8">
            <p className="text-white">
              <span className="text-[#E0BBE4] font-bold">✨ WhitegloveAI Pro Tip for Backgrounds:</span> For that truly polished, WhitegloveAI touch, 
              ensure your background's colors harmonize with your outfit and your brand's palette. A consistent visual aesthetic across all your content 
              truly elevates your professionalism!
            </p>
          </div>
        </motion.section>

        {/* Section 5: Evmux Integration */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#E0BBE4] mb-6">Your Grand Finale: Integrating Everything with Evmux</h2>
          <p className="text-white text-lg mb-8">
            You've built a magnificent studio! Now for the exciting last step: connecting your incredible setup to Evmux for seamless recording and streaming. 
            <span className="text-[#E0BBE4] font-bold">Get ready for your audience!</span>
          </p>

          <h3 className="text-2xl font-semibold text-white mb-4">Launching Evmux:</h3>
          <ul className="text-white space-y-3 mb-8">
            <li>• Open your favorite web browser and gracefully navigate to Evmux. Log in to your creative studio space.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-white mb-4">Selecting Your Amazing Audio Input in Evmux:</h3>
          <ul className="text-white space-y-3 mb-8">
            <li>• Within the Evmux studio interface, find the audio input settings (they're usually found in the 'Sources' or 'Audio' section – keep an eye out!).</li>
            <li>• From the list of available microphones, proudly select <span className="text-[#E0BBE4] font-bold">'Shure MV7i'</span>.</li>
            <li>• You'll see your audio levels happily reacting as you speak. Fine-tune the gain on your MV7i (via its touch panel or the MOTIV Mix app) to ensure your audio levels are robust and lively, but never, ever 'clipping' (hitting that red zone, which means distortion!).</li>
          </ul>

          <div className="bg-gray-500 p-8 rounded-lg mb-8 text-center italic text-gray-300">
            [Screenshot of Evmux audio input settings showing Shure MV7i selected]
          </div>

          <h3 className="text-2xl font-semibold text-white mb-4">Selecting Your Stunning Video Input in Evmux:</h3>
          <ul className="text-white space-y-3 mb-8">
            <li>• In the Evmux studio, locate the video input settings (typically under 'Sources' or 'Camera').</li>
            <li>• Select <span className="text-[#E0BBE4] font-bold">'Logitech MX Brio'</span> from the camera options.</li>
            <li>• And just like magic, your crystal-clear video feed from the webcam should now beautifully appear in Evmux! You're looking fantastic!</li>
          </ul>

          <div className="bg-gray-500 p-8 rounded-lg mb-8 text-center italic text-gray-300">
            [Screenshot of Evmux video input settings showing Logitech MX Brio selected]
          </div>

          <h3 className="text-2xl font-semibold text-white mb-4">Your Final Polish & Positioning (Ready for your desk pic!):</h3>
          <ul className="text-white space-y-3 mb-8">
            <li>• Once you generously share that sample picture of your desk, we'll provide even more tailored, expert advice on perfecting your boom arm and lighting placement for the absolute ultimate visual and audio capture.</li>
            <li>• Before you go live or hit record, always do a quick, joyful test.</li>
            <li>• Listen back to your audio: Is it perfectly clear, free of echoes, and just the right volume?</li>
            <li>• Watch your video: Are you beautifully lit, perfectly in focus, and framed just right?</li>
          </ul>

          <div className="bg-[#E0BBE4]/10 border-l-4 border-[#E0BBE4] p-6 rounded-r-lg">
            <p className="text-white">
              <span className="text-[#E0BBE4] font-bold">You're all set!</span> Get ready to create incredible, captivating content with your WhitegloveAI MediaAI studio. 
              We are so excited to witness the amazing things you'll produce!
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default MediaAIEquipment;
