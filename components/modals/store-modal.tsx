'use client'
import * as z from 'zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useStoreModal } from '@/hooks/use-store-modal'
import { Modal } from '@/components/ui/modal'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { toast } from 'react-hot-toast'
// import { client } from '@/supabase/client'

const formSchema = z.object({
  name: z.string().min(1)
})

export const StoreModal = () => {
  const storeModal = useStoreModal()

  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: ''
    }
  })

  // const { data, error } = await supabase
  // .from('Store')
  // .insert([
  //   { name: 'someValue', other_column: 'otherValue' },
  // ])
  // .select()

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true)
      // const response = await client.from('Store').insert(values)
      // eslint-disable-next-line no-unused-vars
      const response = await axios.post('/api/stores', values)
      window.location.assign(`/${response.data.id}`)
      // toast.success('Store created.')
      // console.log(response.data)
      // console.log(response.data)
    } catch (error) {
      toast.error('Something went wrong.')
      console.log(Error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Modal
      // eslint-disable-next-line react/jsx-handler-names
      title='Create store' description='Add a new store to manage products and categories' isOpen={storeModal.isOpen} onClose={storeModal.onClose}
    >
      <div>
        <div className='space-y-4 py-2 pb-4'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control} name='name' render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input disabled={loading} placeholder='E-Commerce' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className='pt-6 space-x-2 flex items-center justify-end'>
                {/* eslint-disable-next-line react/jsx-handler-names */}
                <Button disabled={loading} variant='outline' onClick={storeModal.onClose}>Cancel</Button>
                <Button disabled={loading} type='submit'>Continue</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  )
}