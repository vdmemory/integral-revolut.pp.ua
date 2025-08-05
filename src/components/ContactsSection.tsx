import React from 'react'
import {
    Calendar,
    CheckCircle,
    Clock,
    Headphones,
    MessageSquare,
    MoveRight,
} from 'lucide-react'
import ContactForm from '@/components/ContactForm.tsx'

const ContactsSection = () => {
    return (
        <section className="py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-2">
                            Select a Date & Time
                        </h2>
                        <p className="text-gray-400 max-w-2xl">
                            Choose from our available slots and tell us about
                            your event
                        </p>
                    </div>
                </div>

                <section
                    id={'contacts'}
                    className="bg-psyco-black-light flex gap-8"
                >
                    <div className="max-w-7xl mx-auto flex-1 min-h-[714px]">
                        <ContactForm />
                    </div>

                    <div className="max-w-7xl mx-auto flex-1 min-h-[714px]">
                        <div
                            className="glassmorphism p-8 md:p-12 h-full"
                            style={{
                                backgroundColor: 'cadetblue',
                            }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
                                <div>
                                    <h2 className="text-3xl font-bold text-white mb-4">
                                        Need to Speak With Us Directly?
                                    </h2>
                                    <p className="text-gray-300 mb-6">
                                        If you have specific questions or prefer
                                        to discuss your requirements over the
                                        phone, our team is here to help.
                                    </p>

                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-3">
                                            <Phone className="h-5 w-5 text-psyco-green-DEFAULT" />
                                            <span className="text-white">
                                                +44 123 456 7890
                                            </span>
                                        </div>

                                        <div className="flex items-center space-x-3">
                                            <Mail className="h-5 w-5 text-psyco-green-DEFAULT" />
                                            <span className="text-white">
                                                booking@psycotikcrew.com
                                            </span>
                                        </div>

                                        <div className="flex items-center space-x-3">
                                            <Clock className="h-5 w-5 text-psyco-green-DEFAULT" />
                                            <span className="text-white">
                                                Mon-Fri: 9am-6pm | Sat: 10am-4pm
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-center space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-psyco-green-DEFAULT/20 p-3 rounded-lg">
                                            <CheckCircle className="h-6 w-6 text-psyco-green-DEFAULT" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-white mb-1">
                                                Emergency Support
                                            </h3>
                                            <p className="text-gray-300">
                                                24/7 support line for existing
                                                bookings
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="bg-psyco-green-DEFAULT/20 p-3 rounded-lg">
                                            <CheckCircle className="h-6 w-6 text-psyco-green-DEFAULT" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-white mb-1">
                                                Custom Packages
                                            </h3>
                                            <p className="text-gray-300">
                                                Speak with our team about
                                                bespoke solutions
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="bg-psyco-green-DEFAULT/20 p-3 rounded-lg">
                                            <CheckCircle className="h-6 w-6 text-psyco-green-DEFAULT" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-white mb-1">
                                                Site Visits
                                            </h3>
                                            <p className="text-gray-300">
                                                Request a venue assessment
                                                before your event
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}

const Phone = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
)

const Mail = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
)

export default ContactsSection
