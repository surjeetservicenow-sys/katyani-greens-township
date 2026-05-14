import { useEffect, useState } from 'react';

export default function KatyaniGreensWebsite() {
  const [residents, setResidents] = useState(245);

  useEffect(() => {
    const interval = setInterval(() => {
      setResidents((prev) => (prev >= 320 ? 245 : prev + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const amenities = [
    {
      icon: '🌿',
      title: 'Nature Inspired Living',
      desc: 'Beautiful green landscapes with peaceful premium environment.',
    },
    {
      icon: '🛡️',
      title: '24x7 Smart Security',
      desc: 'Advanced township security with gated access and CCTV monitoring.',
    },
    {
      icon: '🏛️',
      title: 'Luxury Club House',
      desc: 'Premium clubhouse for community events and family entertainment.',
    },
    {
      icon: '💳',
      title: 'Online Payments',
      desc: 'Digital maintenance payment using Razorpay integration.',
    },
    {
      icon: '📱',
      title: 'Smart Society App',
      desc: 'Resident registration, notices, complaints and updates online.',
    },
    {
      icon: '🎠',
      title: 'Kids Play Zone',
      desc: 'Safe and attractive play areas designed for children.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#03180f] text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 blur-3xl rounded-full"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-4">
            <img
              src="/logo.jpeg"
              alt="Katyani Greens"
              className="w-16 h-16 rounded-full border-4 border-yellow-400 shadow-2xl bg-white object-cover"
            />

            <div>
              <h1 className="text-2xl md:text-3xl font-black tracking-widest text-yellow-400">
                KATYANI GREENS
              </h1>
              <p className="text-green-300 text-sm tracking-wider">
                Where Peace Finds Home
              </p>
            </div>
          </div>

          <nav className="hidden lg:flex gap-8 text-sm font-semibold text-green-100">
            {['Home', 'About', 'Amenities', 'Register', 'Payment', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-yellow-400 transition duration-300"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6 pt-32"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-5 py-2 mb-8 text-yellow-300 text-sm tracking-widest">
              🌿 Elegant + Nature Inspired Township
            </div>

            <h2 className="text-5xl md:text-7xl font-black leading-tight">
              Experience
              <span className="block text-yellow-400">Luxury Living</span>
            </h2>

            <p className="mt-8 text-lg text-green-100 leading-8 max-w-xl">
              Premium township website with resident management, online maintenance
              payments, smart society dashboard, complaint management and luxury
              nature-inspired living experience.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-black px-8 py-4 rounded-2xl shadow-2xl transition hover:scale-105">
                Register Now
              </button>

              <button className="border border-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-2xl font-black transition hover:scale-105">
                Explore Township
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-14">
              <div>
                <h3 className="text-4xl font-black text-yellow-400">{residents}+</h3>
                <p className="text-green-200">Residents</p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-yellow-400">15+</h3>
                <p className="text-green-200">Amenities</p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-yellow-400">24x7</h3>
                <p className="text-green-200">Security</p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute w-[420px] h-[420px] bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>

            <img
              src="/logo.jpeg"
              alt="Katyani Greens Logo"
              className="relative w-[350px] md:w-[500px] rounded-full border-[10px] border-yellow-400 shadow-[0_0_80px_rgba(255,215,0,0.35)] bg-white animate-pulse"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-xl shadow-2xl">
          <h3 className="text-5xl font-black text-yellow-400 mb-8">
            About Katyani Greens
          </h3>

          <p className="text-lg text-green-100 leading-9 max-w-4xl mx-auto">
            Katyani Greens is a premium township designed with a blend of nature,
            luxury lifestyle and smart digital society management. Every section
            of the township reflects peace, elegance, security and modern living.
          </p>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-black text-yellow-400">
              Premium Amenities
            </h3>
            <p className="text-green-200 mt-4 text-lg">
              Designed for luxurious and peaceful lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {amenities.map((item, index) => (
              <div
                key={index}
                className="group bg-white/5 border border-white/10 rounded-[30px] p-8 backdrop-blur-xl hover:-translate-y-3 transition duration-500 hover:border-yellow-400 hover:shadow-[0_0_40px_rgba(255,215,0,0.2)]"
              >
                <div className="text-6xl mb-6">{item.icon}</div>

                <h4 className="text-2xl font-bold text-yellow-300 mb-4">
                  {item.title}
                </h4>

                <p className="text-green-100 leading-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-2xl shadow-2xl">
          <div className="text-center mb-12">
            <h3 className="text-5xl font-black text-yellow-400">
              Resident Registration
            </h3>
            <p className="text-green-200 mt-4">
              Join the premium township community.
            </p>
          </div>

          <form className="grid md:grid-cols-2 gap-6">
            {['Full Name', 'Mobile Number', 'Email Address', 'Flat / Plot Number'].map((placeholder, index) => (
              <input
                key={index}
                type="text"
                placeholder={placeholder}
                className="bg-black/30 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-yellow-400 transition"
              />
            ))}

            <textarea
              rows="5"
              placeholder="Address"
              className="md:col-span-2 bg-black/30 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-yellow-400 transition"
            ></textarea>

            <button className="md:col-span-2 bg-yellow-400 hover:bg-yellow-300 text-black font-black py-5 rounded-2xl text-xl transition hover:scale-[1.02] shadow-2xl">
              Submit Registration
            </button>
          </form>
        </div>
      </section>

      {/* Payment */}
      <section id="payment" className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-5xl font-black text-yellow-400 mb-16">
            Maintenance Plans
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[2500, 3500, 5000].map((price, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-green-900/70 to-black/40 border border-yellow-400/20 rounded-[35px] p-10 hover:-translate-y-4 transition duration-500 shadow-2xl"
              >
                <div className="text-yellow-300 text-xl font-bold mb-4">
                  Premium Plan
                </div>

                <div className="text-6xl font-black text-white mb-6">
                  ₹{price}
                </div>

                <p className="text-green-100 leading-7 mb-8">
                  Smart digital maintenance collection with secure online payment.
                </p>

                <button className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-black py-4 rounded-2xl transition hover:scale-105">
                  Pay with Razorpay
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-2xl shadow-2xl">
          <h3 className="text-5xl font-black text-yellow-400 mb-8">
            Contact Us
          </h3>

          <p className="text-xl text-green-100 mb-4">
            info@katyanigreens.com
          </p>

          <p className="text-xl text-green-100 mb-4">
            +91 99999 99999
          </p>

          <p className="text-green-200 mb-8">
            India
          </p>

          <button className="bg-green-500 hover:bg-green-400 text-black font-black px-8 py-4 rounded-2xl transition hover:scale-105 shadow-2xl">
            Join WhatsApp Group
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-green-200 bg-black/20 backdrop-blur-xl">
        <img
          src="/logo.jpeg"
          alt="Footer Logo"
          className="w-24 h-24 mx-auto rounded-full border-4 border-yellow-400 mb-6 bg-white"
        />

        <h3 className="text-3xl font-black text-yellow-400">
          KATYANI GREENS
        </h3>

        <p className="mt-3 text-green-300 tracking-widest">
          WHERE PEACE FINDS HOME
        </p>

        <p className="mt-6 text-sm text-green-400">
          © 2026 Katyani Greens • Premium Township Experience
        </p>
      </footer>
    </div>
  );
}
