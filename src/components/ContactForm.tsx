import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useLanguage } from '@/contexts/LanguageContext'
import { configCompany } from '@/lib/configCompany.ts'

const ContactForm = () => {
    const { t } = useLanguage()

    const actionEmail = `https://formsubmit.co/${configCompany.email}`

    return (
        <div className="grid gap-8 md:grid-cols-1">
            <div
                className="glassmorphism p-6 animate-fade-in animation-delay-100"
                style={{
                    backgroundColor: 'darkslateblue',
                }}
            >
                <div className="flex items-center space-x-2 mb-4">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-4">
                            {t('contact.title')}
                        </h2>
                        <p className="text-gray-300 mb-6">
                            {t('contact.description')}
                        </p>
                    </div>
                </div>

                <form action={actionEmail} method="POST" className="space-y-4">
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
                            required
                            className="bg-psyco-black-light border-psyco-green-muted/50 text-gray-900"
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
                            required
                            className="bg-psyco-black-light border-psyco-green-muted/50 text-gray-900"
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
                            required
                            className="bg-psyco-black-light border-psyco-green-muted/50 text-gray-900"
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
                            required
                            className="bg-psyco-black-light border-psyco-green-muted/50 text-gray-900"
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
                            className="bg-psyco-black-light border-psyco-green-muted/50 text-gray-900"
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
