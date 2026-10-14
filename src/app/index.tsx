import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface Student {
  id: string;
  name: string;
  course: string;
  units: number;
  isFullLoad: boolean;
}

interface StudentCardProps {
  name: string;
  course: string;
  units: number;
  isFullLoad: boolean;
}

function StudentCard({
  name,
  course,
  units,
  isFullLoad,
}: StudentCardProps) {
  const [selected, setSelected] = useState(false);

  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text>Course: {course}</Text>
      <Text>Units Enrolled: {units}</Text>

      {isFullLoad && (
        <Text style={styles.fullLoad}>Full Load</Text>
      )}

      <Button
        title={selected ? "Selected" : "Mark Student"}
        onPress={() => setSelected(!selected)}
      />
    </View>
  );
}



export default function StudentRoster() {
  const [reversed, setReversed] = useState(false);

  const students: Student[] = [
    {
      id: "s1",
      name: "Ana Cruz",
      course: "IT313",
      units: 21,
      isFullLoad: true,
    },
    {
      id: "s2",
      name: "Bea Santos",
      course: "IT313",
      units: 15,
      isFullLoad: false,
    },
    {
      id: "s3",
      name: "Cid Ramos",
      course: "IT313",
      units: 18,
      isFullLoad: true,
    },
    {
      id: "s4",
      name: "Dex Alonzo",
      course: "IT313",
      units: 12,
      isFullLoad: false,
    },
  ];

  const displayedStudents = reversed
    ? [...students].reverse()
    : students;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>
        {`Student Roster (${students.length} students)`}
      </Text>

      <Button
        title="Reverse Roster"
        onPress={() => setReversed(!reversed)}
      />

      {displayedStudents.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          course={student.course}
          units={student.units}
          isFullLoad={student.isFullLoad}
        />
      ))}
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    gap: 14,
    backgroundColor: "#f3f4f6",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    gap: 8,
    borderWidth: 1,
    borderColor: "#dddddd",
  },
  name: {
    fontSize: 19,
    fontWeight: "bold",
  },
  fullLoad: {
    color: "green",
    fontWeight: "bold",
  },
});