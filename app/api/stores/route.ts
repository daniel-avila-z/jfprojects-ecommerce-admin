import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs'
// import { supabase } from '@/lib/supabasedb'

import prismadb from '@/lib/prismadb'

export async function POST (
  req: Request
) {
  try {
    const { userId } = auth()
    const body = await req.json()

    const { name } = body

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 403 })
    }

    if (!name) {
      return new NextResponse('Name is required', { status: 400 })
    }

    // const store = await supabase.from('Store').insert({
    //   data: {
    //     name,
    //     userId
    //   }
    // })

    // const store = await supabase
    //   .from('Store')
    //   .insert([
    //     {
    //       name,
    //       userId
    //     }
    //   ])
    //   .select()

    const store = await prismadb.store.create({
      data: {
        name,
        userId
      }
    })
    return NextResponse.json(store)
  } catch (error) {
    console.log('[STORES_POST]', error)
    // eslint-disable-next-line new-cap
    return new NextResponse('Internal error', { status: 500 })
  }
}
