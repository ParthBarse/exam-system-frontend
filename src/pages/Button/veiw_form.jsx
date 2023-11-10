import React, { useState } from 'react';
import axios from 'axios';
import { PDFDocument, rgb } from 'pdf-lib';
import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

function ViewForm() {
  const [pdfContent, setPdfContent] = useState(null);

  const fetchDataFromAPI = async () => {
    try {
      const response = await axios.get('https://mcf-backend.vercel.app/api/CancelledStudents');
      const apiData = response.data;

      // Call a function to generate the PDF from the API data
      const pdf = await generatePDF(apiData);
      setPdfContent(pdf);
    } catch (error) {
      console.error('Error fetching data from API:', error);
    }
  };

  const generatePDF = async (apiData) => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);

    const { width, height } = page.getSize();
    const content = page.getContentStream();

    content.setFontSize(12);
    content.setFillColor(rgb(0, 0, 0));
    content.drawText('API Data:', {
      x: 50,
      y: height - 50,
    });

    // You can add your API data to the PDF here
    content.drawText(JSON.stringify(apiData), {
      x: 50,
      y: height - 70,
    });

    page.pushContentStream(content);

    const pdfBytes = await pdfDoc.save();

    // Convert the PDF bytes to a base64 string
    const pdfBase64 = btoa(String.fromCharCode(...pdfBytes));

    return pdfBase64;
  };

  return (
    <div>
      <button onClick={fetchDataFromAPI}>Generate PDF</button>
      {pdfContent && (
        <PDFViewer width={600} height={400}>
          <Document>
            <Page size="A4">
              <View style={styles.page}>
                <Text style={styles.text}>{pdfContent}</Text>
              </View>
            </Page>
          </Document>
        </PDFViewer>
      )}
    </div>
  );
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
  },
});

export default ViewForm;
