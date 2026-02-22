import { jsPDF } from 'jspdf'
import { pressKit, siteMeta } from '../data/content'

const LINE_HEIGHT = 6
const MARGIN = 20
const PAGE_WIDTH = 210
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2

export function downloadPressKitPdf(): void {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' })
  let y = MARGIN

  const addTitle = (text: string, fontSize = 18) => {
    doc.setFontSize(fontSize)
    doc.setFont('helvetica', 'bold')
    doc.text(text, MARGIN, y)
    y += LINE_HEIGHT + 4
  }

  const addSubtitle = (text: string) => {
    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')
    doc.text(text, MARGIN, y)
    y += LINE_HEIGHT + 2
  }

  const addParagraph = (text: string, indent = 0) => {
    doc.setFontSize(11)
    doc.setFont('helvetica', 'normal')
    const lines = doc.splitTextToSize(text, CONTENT_WIDTH - indent)
    lines.forEach((line: string) => {
      doc.text(line, MARGIN + indent, y)
      y += LINE_HEIGHT
    })
    y += 4
  }

  const addLabelValue = (label: string, value: string) => {
    doc.setFontSize(10)
    doc.setFont('helvetica', 'bold')
    doc.text(`${label}: `, MARGIN, y)
    const labelWidth = doc.getTextWidth(`${label}: `)
    doc.setFont('helvetica', 'normal')
    const valueLines = doc.splitTextToSize(value, CONTENT_WIDTH - labelWidth - 2)
    doc.text(valueLines[0], MARGIN + labelWidth, y)
    if (valueLines.length > 1) {
      y += LINE_HEIGHT
      valueLines.slice(1).forEach((line: string) => {
        doc.text(line, MARGIN, y)
        y += LINE_HEIGHT
      })
    }
    y += LINE_HEIGHT + 2
  }

  // Title
  addTitle(siteMeta.artistName, 22)
  addSubtitle(`${siteMeta.businessName} · Media & Press Kit`)
  y += 8

  // Short bio
  addTitle('Short bio', 14)
  addParagraph(pressKit.shortBio)
  y += 2

  // Details
  addTitle('Details', 14)
  addLabelValue('Company', pressKit.businessName)
  addLabelValue('Genre', pressKit.genre)
  addLabelValue('Location', pressKit.location)
  addLabelValue('Contact', `${pressKit.contactEmail} · ${pressKit.phone}`)
  y += 2

  // Technical
  addTitle('Technical & booking', 14)
  addParagraph(pressKit.techRiderNote)
  addParagraph(pressKit.stageRequirementsNote)

  doc.save(`${siteMeta.businessName.replace(/\s+/g, '-')}-Press-Kit.pdf`)
}
