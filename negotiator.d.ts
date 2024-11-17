// negotiator.d.ts
declare module 'negotiator' {
    interface Headers {
        [key: string]: string | string[] | undefined;
    }

    class Negotiator {
        constructor(req: { headers: Headers });
        languages(): string[];
        mediaTypes(): string[];
        charsets(): string[];
        encodings(): string[];
    }

    export = Negotiator;
}