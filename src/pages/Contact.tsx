import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageCircle, Clock, User } from 'lucide-react';

interface ContactProps {
  setCurrentPage: (page: string) => void;
}

const Contact: React.FC<ContactProps> = ({ setCurrentPage }) => {
  useEffect(() => {
    setCurrentPage('contact');
  }, [setCurrentPage]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert('Thank you for your message! I will get back to you soon.');
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'muniswaranmeswar@gmail.com',
      href: 'mailto:muniswaranmeswar@gmail.com',
      color: 'from-blue-600 to-blue-700',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8925369446',
      href: 'tel:+918925369446',
      color: 'from-green-600 to-green-700',
      bgColor: 'from-green-50 to-green-100'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bengaluru, India',
      href: '#',
      color: 'from-purple-600 to-purple-700',
      bgColor: 'from-purple-50 to-purple-100'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/muniswaran',
      href: 'https://www.linkedin.com/in/muniswaran-l-b427132b3/',
      color: 'from-blue-700 to-blue-800',
      bgColor: 'from-blue-50 to-blue-100'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Get In Touch</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          I'm always excited to discuss new opportunities, collaborate on interesting projects, or simply connect with fellow data enthusiasts
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Let's Connect</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Whether you have a project in mind, want to discuss data analytics opportunities, 
              or just want to say hello, I'd love to hear from you. Here's how you can reach me:
            </p>
          </div>

          {/* Contact Cards */}
          <div className="space-y-4">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className={`block bg-gradient-to-r ${contact.bgColor} border border-slate-200 rounded-xl p-6 hover:shadow-md transition-all duration-300 group`}
                >
                  <div className="flex items-center">
                    <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-slate-800">
                        {contact.label}
                      </h3>
                      <p className="text-slate-600 group-hover:text-slate-700">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Availability */}
          <div className="bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-center mb-3">
              <Clock className="w-6 h-6 text-green-600 mr-3" />
              <h3 className="text-lg font-semibold text-slate-900">Availability</h3>
            </div>
            <p className="text-slate-700">
              I typically respond to emails within 24 hours. Currently open to new opportunities 
              and exciting data analytics projects.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com/in/muniswaran"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors group"
            >
              <Linkedin className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-900 hover:bg-slate-800 rounded-lg flex items-center justify-center transition-colors group"
            >
              <Github className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
          <div className="flex items-center mb-6">
            <MessageCircle className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-slate-900">Send a Message</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                <User className="w-4 h-4 inline mr-2" />
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                <Mail className="w-4 h-4 inline mr-2" />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="What would you like to discuss?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                placeholder="Tell me about your project, opportunity, or just say hello..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">What type of projects do you work on?</h3>
            <p className="text-slate-700">
              I specialize in data analytics projects including dashboard creation, ETL processes, 
              data visualization, and business intelligence solutions using tools like Python, SQL, Power BI, and Tableau.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Are you available for freelance work?</h3>
            <p className="text-slate-700">
              Yes, I'm open to freelance data analytics projects and consulting opportunities. 
              I can help with data analysis, visualization, reporting automation, and more.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">How quickly do you respond to inquiries?</h3>
            <p className="text-slate-700">
              I typically respond to all inquiries within 24 hours. For urgent matters, 
              feel free to mention it in your message and I'll prioritize accordingly.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Do you provide remote services?</h3>
            <p className="text-slate-700">
              Absolutely! I work remotely with clients globally and am comfortable with 
              various collaboration tools and communication platforms to ensure smooth project delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;