"use client"

import {Box, CardContent, Typography} from "@mui/material";
import {Morpheme} from "@/app/ui/math/components/Morpheme";

export function Slider_card({morpheme, title, description, icon, quote, annotation }: {morpheme: any, title: string, description: string, icon: string, quote: string, annotation: string }) {
    return (
        <Box
            sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
            className="relative p-6 border-gray-200 rounded-lg border-2 shadow-lg"
        >
            {/* Card Content */}
            <CardContent className="space-y-4">
                {/* Title */}
                <Typography variant="h5" component="div" className=" indent-4 header_h3">
                    {icon}
                    {title}
                    <Morpheme {...morpheme}/>
                </Typography>

                {/* Description */}
                <Typography  variant="body1" color="text.secondary" className="paragraph indent-4">
                    {description}
                </Typography>

                {/* Quote */}
                <Typography variant="body2" color="text.secondary" className="paragraph indent-4">
                    <blockquote
                        className="font-semibold italic mb-4 relative pl-8 before:content-['“'] before:absolute before:left-0 before:top-0 before:text-5xl before:font-bold before:text-indigo-300 after:content-['”'] after:text-5xl after:font-bold after:text-indigo-300">
                        {quote}
                    </blockquote>
                </Typography>

                {/* Annotation */}
                <div className="text-gray-700 text-base bg-indigo-50 p-4 rounded-lg shadow-inner">
                    <p className="italic">
                        <span className="font-bold text-purple-600">Аннотация:</span> {annotation}
                    </p>
                </div>
            </CardContent>
        </Box>
    );
}