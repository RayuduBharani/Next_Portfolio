import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Facebook, Github, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function ContactPage() {
    return (
            <div className="h-screen flex justify-center p-4">
                <div className="max-w-6xl w-full bg-background rounded-2xl shadow-2xl overflow-hidden overflow-y-scroll hide-scrollbar">
                    <div className="flex flex-col lg:flex-row">
                        {/* Info Section */}
                        <div className="lg:w-5/12 bg-primary p-8 lg:p-12 text-white">
                            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <MapPin className="h-6 w-6" />
                                    <div>
                                        <h3 className="font-semibold">Location</h3>
                                        <p className="text-sm opacity-90">Kakinada, Andhra Pradesh, India</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <Mail className="h-6 w-6" />
                                    <div>
                                        <h3 className="font-semibold">Email</h3>
                                        <p className="text-sm opacity-90">rayudubharani7288@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <Phone className="h-6 w-6" />
                                    <div>
                                        <h3 className="font-semibold">Phone</h3>
                                        <p className="text-sm opacity-90">7075923575</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12">
                                <h3 className="font-semibold mb-4">Connect with me</h3>
                                <div className="flex space-x-4">
                                    <Link href="https://www.linkedin.com/in/rayudu-bharani-satya-siva-durgaprasad-35262527a/"
                                        className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
                                        <Linkedin className="h-5 w-5" />
                                    </Link>
                                    <Link href="https://github.com/RayuduBharani"
                                        className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
                                        <Github className="h-5 w-5" />
                                    </Link>
                                    <Link href="https://x.com/?lang=en"
                                        className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
                                        <Twitter className="h-5 w-5" />
                                    </Link>
                                    <Link href="https://www.facebook.com/"
                                        className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
                                        <Facebook className="h-5 w-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Form Section */}
                        <div className="lg:w-7/12 p-2 lg:p-12">
                            <h2 className="text-2xl font-bold mb-8">Send me a message</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2" htmlFor="name">
                                            Name
                                        </label>
                                        <Input
                                            id="name"
                                            className="w-full bg-secondary/50 border-0 focus:ring-2 focus:ring-primary"
                                            placeholder="Rayudu Bharani"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2" htmlFor="email">
                                            Email
                                        </label>
                                        <Input
                                            id="email"
                                            type="email"
                                            className="w-full bg-secondary/50 border-0 focus:ring-2 focus:ring-primary"
                                            placeholder="bharani@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2" htmlFor="subject">
                                        Subject
                                    </label>
                                    <Input
                                        id="subject"
                                        className="w-full bg-secondary/50 border-0 focus:ring-2 focus:ring-primary"
                                        placeholder="How can I help you?"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2" htmlFor="message">
                                        Message
                                    </label>
                                    <Textarea
                                        id="message"
                                        className="w-full bg-secondary/50 border-0 focus:ring-2 focus:ring-primary min-h-[150px]"
                                        placeholder="Your message..."
                                    />
                                </div>

                                <Button disabled className="w-full cursor-not-allowed bg-primary hover:bg-primary/90 text-white py-6">
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    )
}