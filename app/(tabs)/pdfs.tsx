import { setHeaderText } from '@/store/appConfigSlice';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
const PDFS = [
  { title: 'General Knowledge 2025', file: 'GK2025.pdf' },
  { title: 'Current Affairs Jan-Jun', file: 'CA_Jan_Jun.pdf' },
  { title: 'Maths Formulas', file: 'Maths_Formulas.pdf' },
  { title: 'Reasoning Tricks', file: 'Reasoning_Tricks.pdf' },
  { title: 'SSC English Mastery', file: 'SSC_English.pdf' },
  { title: 'Banking Awareness', file: 'Banking_Awareness.pdf' },
  { title: 'Reasoning Tricks 1', file: 'Reasoning_Tricks_1.pdf' },
];

export default function PDFsScreen() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setHeaderText("Free PDFs"));
    return () => {
      dispatch(setHeaderText(""));
    };
  }, []);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.pdfList}>
        {PDFS.map(pdf => (
          <View key={pdf.file} style={styles.pdfCard}>
            <Text style={styles.pdfTitle}>{pdf.title}</Text>
            <TouchableOpacity style={styles.downloadBtn}>
              <Text style={styles.downloadText}>Download</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#f4faff',
    paddingVertical: 32,
    flexGrow: 1,
  },
  description: {
    fontSize: 15,
    color: '#444',
    textAlign: 'center',
    marginBottom: 18,
    marginHorizontal: 10,
  },
  pdfList: {
    width: '100%',
    alignItems: 'center',
  },
  pdfCard: {
    width: 320,
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 18,
    marginVertical: 8,
    alignItems: 'center',
    elevation: 2,
    borderWidth: 1.5,
    borderColor: '#e0eaff',
    shadowColor: '#3b82f6',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  pdfTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 8,
    textAlign: 'center',
  },
  downloadBtn: {
    backgroundColor: '#3b82f6',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 28,
    marginTop: 2,
  },
  downloadText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 0.5,
  },
});
