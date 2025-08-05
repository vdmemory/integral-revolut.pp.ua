import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { format } from 'date-fns'
import { toast } from '@/hooks/use-toast'
import { useLanguage } from '@/contexts/LanguageContext'

const ContactForm = () => {
    const { t } = useLanguage()
    const [date, setDate] = useState<Date | undefined>(undefined)
    const [timeSlot, setTimeSlot] = useState<string>('')
    const [eventType, setEventType] = useState<string>('')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        details: '',
    })

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!date || !timeSlot || !eventType) {
            toast({
                title: 'Missing information',
                description: 'Please select a date, time slot, and event type',
                variant: 'destructive',
            })
            return
        }

        // Here you would normally send the data to your backend
        console.log({
            date: date ? format(date, 'yyyy-MM-dd') : '',
            timeSlot,
            eventType,
            ...formData,
        })

        toast({
            title: 'Booking request submitted!',
            description: `We'll contact you soon to confirm your ${eventType} on ${format(date, 'MMMM dd, yyyy')} at ${timeSlot}.`,
        })

        // Reset form
        setDate(undefined)
        setTimeSlot('')
        setEventType('')
        setFormData({
            name: '',
            email: '',
            phone: '',
            location: '',
            details: '',
        })
    }

    return (
        <div className="grid gap-8 md:grid-cols-1">
            <div
                className="glassmorphism p-6 animate-fade-in animation-delay-100"
                style={{
                    backgroundColor: 'darkseagreen',
                }}
            >
                <div className="flex items-center space-x-2 mb-4">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-4">{t('contact.title')}</h2>
                        <p className="text-gray-300 mb-6">{t('contact.description')}</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-gray-300 mb-1"
                        >
                            {t('contact.name')}
                        </label>
                        <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="bg-psyco-black-light border-psyco-green-muted/50"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-gray-300 mb-1"
                        >
                            {t('contact.email')}
                        </label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="bg-psyco-black-light border-psyco-green-muted/50"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="phone"
                            className="block text-gray-300 mb-1"
                        >
                            {t('contact.phone')}
                        </label>
                        <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="bg-psyco-black-light border-psyco-green-muted/50"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="location"
                            className="block text-gray-300 mb-1"
                        >
                            {t('contact.company')}
                        </label>
                        <Input
                            id="company"
                            name="company"
                            value={formData.location}
                            onChange={handleInputChange}
                            required
                            className="bg-psyco-black-light border-psyco-green-muted/50"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="details"
                            className="block text-gray-300 mb-1"
                        >
                            {t('contact.project')}
                        </label>
                        <Textarea
                            id="details"
                            name="details"
                            rows={3}
                            value={formData.details}
                            onChange={handleInputChange}
                            className="bg-psyco-black-light border-psyco-green-muted/50"
                            placeholder={t('contact.project.placeholder')}
                        />
                    </div>

                    <Button
                        type="submit"
                        className="btn-glow text-white font-bold py-3 px-8 rounded-lg flex items-center justify-center relative z-10 shadow-lg"
                    >
                        {t('contact.submit')}
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm
