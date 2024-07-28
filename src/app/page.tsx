'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { EmployerLetter, formSchema } from '@/app/letter'
import { useEffect, useState } from 'react'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'

function Instructions() {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  })

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Employer</AccordionTrigger>
        <AccordionContent>
          <ul className="list-decimal pl-4 pt-2">
            <li>
              <div>
                Fill out the following:
                <Form {...form}>
                  <form className="space-y-8">
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormDescription>Full Legal Company Name</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="companyRepresentativeName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Representative Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormDescription>Your Name</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="companyRepresentativePosition"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Representative Position</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormDescription>Your Name</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="companyAddress"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Address</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormDescription>Full Address</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="employeeName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Employee Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormDescription>Full Name</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="jobTitle"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Job Title</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormDescription>Job Title</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="fullTime"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Time?</FormLabel>
                          <FormControl>
                            <Input placeholder="full time" {...field} />
                          </FormControl>
                          <FormDescription>
                            Write &quot;full time&quot; or &quot;part time&quot;
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="startDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Start Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormDescription>Start Date</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="endDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>End Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormDescription>End Date</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="salary"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Salary</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                          <FormDescription>Annual Salary in USD</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="additionalBenefits"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Benefits</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormDescription>
                            Additional Benefits such as insurance or PTO
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="education"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Education</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormDescription>
                            Name of degree or certification they received and from what school
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="previousStatus"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Previous Status</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormDescription>Previous Visa Status if they had any</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {!!form.watch('previousStatus') && (
                      <>
                        <FormField
                          control={form.control}
                          name="previousStatusStartDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Previous Status</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} />
                              </FormControl>
                              <FormDescription>Previous Visa Status Start Date</FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="previousStatusEndDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Previous Status</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} />
                              </FormControl>
                              <FormDescription>Previous Visa Status End Date</FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </>
                    )}
                    <FormField
                      control={form.control}
                      name="tasks"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tasks</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormDescription>
                            Write the tasks the employee will be doing
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </form>
                </Form>
                {isClient &&
                  (form.formState.isValid ? (
                    <Button variant="outline" className="mt-2">
                      <PDFDownloadLink
                        document={<EmployerLetter formData={form.getValues()} />}
                        fileName="employer-letter.pdf"
                      >
                        {({ blob, url, loading, error }) =>
                          loading ? 'Loading document...' : 'Download Letter (employer-letter.pdf)'
                        }
                      </PDFDownloadLink>
                    </Button>
                  ) : (
                    <div className="mt-4">Please finish filling out all fields</div>
                  ))}
              </div>
            </li>
            <li className="mt-4">
              Download the letter and give to employee. The employee when crossing the border will
              present this to a border officer. That&apos;s it!
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Employee</AccordionTrigger>
        <AccordionContent>
          <span>
            You&apos;re employer will give you the letter above. You may establish eligibility for
            TN classification at the time you seek admission to the United States by presenting
            required documentation to a U.S. Customs and Border Protection (CBP) officer at certain
            CBP-designated U.S. ports of entry (
            <a href="https://www.cbp.gov/about/contact/ports">look here</a>) or at a designated
            pre-clearance/pre-flight inspection station (
            <a href="https://www.cbp.gov/about/contact/ports">same link also includes airports</a>).
            You must provide the following documentation to the CBP officer:
          </span>
          <ul className="list-disc pl-4 pt-2">
            <li>Proof of Canadian citizenship</li>
            <li>Letter provided by employer above</li>
            <li>
              The physical degree/diploma provided by your university (transcripts don&apos;t count)
            </li>
          </ul>
          <p>You will be admitted as a TN nonimmigrant.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">
        2 Minutes: Hire a Canadian to work in the US <strong>No Visa required!</strong>
      </h1>
      <p>
        To see exact guidelines: visit the{' '}
        <a href="https://www.uscis.gov/working-in-the-united-states/temporary-workers/tn-nafta-professionals">
          uscis.gov website
        </a>
        . <strong>This is not legal advice.</strong>
      </p>
      <p>
        This form is for companies hiring Canadian <strong>Citizens</strong> who seek a TN
        non-immigrant status to stay in the US for 3 years. To stay longer, first get the letter,
        then get the employer to fill out Form I-129 (
        <a href="https://www.uscis.gov/working-in-the-united-states/temporary-workers/tn-nafta-professionals">
          see here
        </a>
        ) once you&apos;re in the U.S.
      </p>
      <p>
        <strong>First</strong>, check if the employee&apos;s occupation is listed{' '}
        <a href="https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-214/subpart-A/section-214.6">
          here in &quot;Appendix 2 to Annex 16-A of Chapter 16 (Annotated)&quot;
        </a>
        . The employee must also have the degree. If they don&apos;t, they will not be eligible for
        TN status.
      </p>
      <Instructions />
      <span>
        For more help, please visit https://github.com/Andrew-Chen-Wang/Canadian-in-US-employment
        and file a GitHub issue. Please do not email me; I am not a lawyer. In fact, I am American
        with, at the moment, a Canadian girlfriend.
      </span>
    </div>
  )
}
