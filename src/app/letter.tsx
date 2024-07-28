import React from 'react'
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'
import { z } from 'zod'

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
})

export const formSchema = z.object({
  companyName: z.string().min(3).max(200),
  companyRepresentativeName: z.string().min(3).max(200),
  companyRepresentativePosition: z.string().min(2).max(200),
  companyAddress: z.string().min(3).max(200),
  employeeName: z.string().min(3).max(200),
  jobTitle: z.string().min(3).max(200),
  fullTime: z.string().min(3).max(200),
  startDate: z.string().date(),
  endDate: z.string().date(),
  salary: z.string(),
  additionalBenefits: z.string(),
  education: z.string().min(3).max(200),
  previousStatus: z.string(),
  previousStatusStartDate: z.string().date(),
  previousStatusEndDate: z.string().date(),
  tasks: z.string().min(3),
})

type FormData = z.infer<typeof formSchema>

export const EmployerLetter = ({ formData }: { formData: FormData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>To Whom It May Concern:</Text>
        <Text style={{ margin: 10 }}></Text>
        <Text>
          I am writing this letter to formally seek TN non-immigrant status for{' '}
          {formData.employeeName} for the position of {formData.jobTitle} at {formData.companyName}.
          Under TN status, {formData.employeeName} will be employed on a {formData.fullTime} basis
          from {formData.startDate} to {formData.endDate}.
        </Text>
        <Text style={{ margin: 10 }}></Text>
        <Text>
          {formData.employeeName} will work at {formData.companyName}’s office located at{' '}
          {formData.companyAddress}. The annual salary for this position is {formData.salary}{' '}
          {formData.additionalBenefits
            ? `, and ${formData.employeeName} may be eligible for additional benefits ${formData.additionalBenefits}`
            : ''}
          .
        </Text>
        <Text style={{ margin: 10 }}></Text>
        <Text>
          The role for which we are employing {formData.employeeName} aligns with the professional
          occupations specified in 8 CFR 214.6, Appendix 1603.D1 under the NAFTA/USMCA agreement.
        </Text>
        <Text style={{ margin: 10 }}></Text>
        <Text>
          {formData.employeeName} possesses the necessary qualifications for the role, including{' '}
          {formData.education}.{' '}
          {formData.previousStatus
            ? `Additionally, if applicable,
          ${formData.employeeName} has prior experience working in the U.S. from ${formData.previousStatusStartDate} 
          to ${formData.previousStatusEndDate}, holding ${formData.previousStatus}`
            : ''}
          .
        </Text>
        <Text style={{ margin: 10 }}></Text>
        <Text>
          The tasks that {formData.employeeName} will undertake in this role include{' '}
          {formData.tasks}.
        </Text>
        <Text style={{ margin: 10 }}></Text>
        <Text>
          We firmly believe that the position we are seeking TN designation for aligns seamlessly
          with NAFTA/USMCA provisions, and {formData.employeeName}’s qualifications make them an
          excellent candidate. We appreciate your consideration of our request for a TN visa for
          {formData.employeeName}.
        </Text>
        <Text style={{ margin: 10 }}></Text>
        <Text>Should you require further information, please contact me directly.</Text>
        <Text style={{ margin: 10 }}></Text>
        <Text>Sincerely,</Text>
        <Text>{formData.companyRepresentativeName}</Text>
        <Text>{formData.companyRepresentativePosition}</Text>
        <Text>{formData.companyName}</Text>
      </View>
    </Page>
  </Document>
)
