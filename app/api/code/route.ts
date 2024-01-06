import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY// This is also the default, can be omitted
});

const instructionsMessage: ChatCompletionMessageParam = {
    role: "system",
    content: "You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations."
}

export async function POST(
    req: Request,
) {
    try {

        const { userId } = auth();
        const body = await req.json();
        const {messages} = body;

        if(!userId){
            return new NextResponse("Unauthorized", { status: 400 });
        }

        if(!openai.apiKey){
            return new NextResponse("Open AI API Key not Configured", { status: 500 });

        }

        if(!messages){
            return new NextResponse("Messages are Required", { status: 400 });
        }

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [instructionsMessage, ...messages],
        });

        return NextResponse.json(response.choices[0].message)

    } catch (error) {
        console.log("[CODE_ERROR]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}