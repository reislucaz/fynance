import supabase from '@/utils/supabase';
import { NextRequest, NextResponse } from 'next/server';
import z from 'zod'

type ResponseData = {
    title: string;
    banner_url: string;
    font_url: string;
}[] | {
    message: string;
}
export async function GET(
    req: NextRequest,
    res: NextResponse<ResponseData>
) {
    const { searchParams } = new URL(req.url)

    const page = z.number().safeParse(Number(searchParams.get('page') ?? 1))

    if (page.success === false) {
        return new Response('Página deve ser um número', {status: 400})
    }

    const { data: posts } = await supabase
        .from("news")
        .select("title, banner_url, font_url", { count: "exact" })
        .range(page.data * 12, (page.data + 1) * 12 - 1)

    return Response.json(posts ?? [])
}