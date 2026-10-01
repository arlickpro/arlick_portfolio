import { useState } from 'react';
import { Mail, Send, Copy, Check, MessageSquare, AlertCircle, CheckCircle2, ExternalLink } from 'lucide-react';
import { WhatsAppIcon, InstagramIcon } from './Icons';
import { personalInfo } from '../data/personalInfo';

export default function Contact({ onTriggerToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    if (onTriggerToast) {
      onTriggerToast({
        type: 'success',
        message: `Email copied: ${personalInfo.email}`,
      });
    }
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      if (onTriggerToast) {
        onTriggerToast({
          type: 'error',
          message: 'Please resolve form validation errors before proceeding.',
        });
      }
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      if (onTriggerToast) {
        onTriggerToast({
          type: 'info',
          message: 'Form validated. Ready to send via WhatsApp or Email.',
        });
      }
    }, 600);
  };

  const getPrefilledWhatsAppUrl = () => {
    if (!submittedData) return personalInfo.whatsappLink;
    const text = encodeURIComponent(
      `Hello IRANZI Arlick,\n\nName: ${submittedData.name}\nEmail: ${submittedData.email}\nSubject: ${submittedData.subject}\n\nMessage:\n${submittedData.message}`
    );
    return `https://wa.me/250796434524?text=${text}`;
  };

  const getPrefilledMailtoUrl = () => {
    if (!submittedData) return personalInfo.emailLink;
    const subject = encodeURIComponent(`Portfolio Inquiry: ${submittedData.subject}`);
    const body = encodeURIComponent(
      `Hi IRANZI Arlick,\n\nFrom: ${submittedData.name} (${submittedData.email})\n\n${submittedData.message}`
    );
    return `mailto:arlickiranzi@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-xl">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Let's Start A Conversation
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
            Have a project in mind, an inquiry, or looking to collaborate? Reach out directly via WhatsApp, Instagram, or Email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left Column: Direct Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 sm:p-10 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-2">
                {personalInfo.name}
              </h3>
              <p className="text-sm font-semibold text-cyan-400 mb-6">
                {personalInfo.title}
              </p>
              <p className="text-sm text-slate-400 leading-relaxed mb-8">
                I prioritize prompt communication and transparent engineering. Reach out through any of my direct channels below.
              </p>

              {/* Direct channels */}
              <div className="space-y-4">
                
                {/* WhatsApp */}
                <a
                  href={personalInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                      <WhatsAppIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-mono">WhatsApp</div>
                      <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {personalInfo.whatsapp}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                </a>

                {/* Email */}
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-blue-500/40 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 font-mono">Email Address</div>
                        <a
                          href={personalInfo.emailLink}
                          className="text-sm font-bold text-white hover:text-blue-400 transition-colors"
                        >
                          {personalInfo.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Copy Email Button: rounded-full */}
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-xs font-semibold text-slate-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-400/30 transition-all"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Email Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Email Address</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Instagram */}
                <a
                  href={personalInfo.instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-pink-500/40 hover:bg-pink-500/10 transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-pink-500/10 text-pink-400 flex items-center justify-center border border-pink-500/20">
                      <InstagramIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-mono">Instagram</div>
                      <div className="text-sm font-bold text-white group-hover:text-pink-400 transition-colors">
                        @{personalInfo.instagram}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-pink-400 transition-colors" />
                </a>

              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Transparent State Handling */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-2">
                Send A Message
              </h3>
              <p className="text-sm text-slate-400 mb-8">
                Fill in the details below. Our client-side validator will compose your message ready for one-click transmission.
              </p>

              {/* Form Submission Notice / State */}
              {submittedData ? (
                <div className="p-6 rounded-2xl bg-cyan-950/40 border border-cyan-800/80 space-y-5 animate-fade-in backdrop-blur-xl">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-base font-bold text-white">
                        Form Validated Successfully
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                        <strong>Notice:</strong> This portfolio is currently running in client-side frontend mode. Choose your preferred communication channel below to transmit this message instantly:
                      </p>
                    </div>
                  </div>

                  {/* Summary of user input */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-white/10 text-xs font-mono text-slate-300 space-y-1.5">
                    <div><strong className="text-white">From:</strong> {submittedData.name} ({submittedData.email})</div>
                    <div><strong className="text-white">Subject:</strong> {submittedData.subject}</div>
                    <div className="line-clamp-2"><strong className="text-white">Message:</strong> {submittedData.message}</div>
                  </div>

                  {/* Immediate Transfer Buttons: Rounded-full */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      href={getPrefilledWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-full text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-xl shadow-emerald-600/20 transition-all hover:-translate-y-1"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </a>

                    <a
                      href={getPrefilledMailtoUrl()}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-full text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/20 transition-all hover:-translate-y-1"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send via Email Client</span>
                    </a>
                  </div>

                  <div className="text-center pt-2">
                    <button
                      type="button"
                      onClick={() => setSubmittedData(null)}
                      className="text-xs text-slate-400 hover:text-white underline font-medium"
                    >
                      Edit message
                    </button>
                  </div>
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${
                          errors.name
                            ? 'border-rose-500 focus:ring-rose-500'
                            : 'border-white/10 focus:ring-cyan-400/50'
                        } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 backdrop-blur-xl transition-all`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. john@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${
                          errors.email
                            ? 'border-rose-500 focus:ring-rose-500'
                            : 'border-white/10 focus:ring-cyan-400/50'
                        } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 backdrop-blur-xl transition-all`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Subject *
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Full Stack Web Development Project"
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${
                        errors.subject
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-white/10 focus:ring-cyan-400/50'
                      } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 backdrop-blur-xl transition-all`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, timeline, or requirements..."
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${
                        errors.message
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-white/10 focus:ring-cyan-400/50'
                      } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 backdrop-blur-xl transition-all resize-none`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button: rounded-full */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-1 disabled:opacity-70 disabled:pointer-events-none"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Validating Details...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Validate & Proceed</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-slate-500">
                    Transparent frontend validation • Direct connection via WhatsApp or Email
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
