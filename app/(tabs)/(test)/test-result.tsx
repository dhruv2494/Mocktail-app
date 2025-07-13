import { Ionicons } from '@expo/vector-icons';
import React from "react";
import { Dimensions, ScrollView, Text, TouchableOpacity, View } from "react-native";

const leaderboard = [
  { rank: 1, name: 'Gangurde Abhijit 38_2018', score: 10 },
  { rank: 2, name: 'Ashwini Gedam', score: 10 },
  { rank: 3, name: 'akash patil', score: 10 },
  { rank: 4, name: 'Teena Jain', score: 10 },
  { rank: 5, name: 'Ranjeet Singh', score: 10 },
  { rank: 6, name: 'Anshu Chaurasia', score: 10 },
  { rank: 7, name: 'Nikhil Singh', score: 10 },
  { rank: 8, name: 'Awadhesh Kumar', score: 10 },
  { rank: 9, name: 'Ranjeet Singh', score: 10 },
  { rank: 10, name: 'Sandip Parmar', score: 10 },
  { rank: 83, name: 'John Doe', score: 0 },
];

const userStats = {
  rank: 83,
  attempted: 0,
  accuracy: 0,
  percentile: 5.68,
  time: '9 Min 59 Sec',
  score: 0,
  total: 10,
};

const barData = [
  { label: 'Correct', value: 0, max: 10, color: '#3CB4A6' },
  { label: 'Wrong', value: 0, max: 10, color: '#F66' },
  { label: 'Time', value: 8, max: 10, color: '#F9B233' },
];

const sectionTabs = [
  'Overall',
  'Missing Number Series Questions for Bank Clerk Prelims Exam (Day -365)'
];

export default function TestResult() {
  const [activeTab, setActiveTab] = React.useState(0);
  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={{ flex: 1, backgroundColor: '#F4F7FB' }}>
      {/* Header */}
      <View style={{
        height: 70,
        width: "100%",
        backgroundColor: '#4C5DF4',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingTop: 10,
        elevation: 4,
      }}>
        <TouchableOpacity style={{ marginRight: 12 }}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: 'bold', flex: 1 }} numberOfLines={1}>
          Result - Missing Number Series ...
        </Text>
      </View>
      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 40 }}>
        {/* 1. Congratulations Card */}
        <View style={{ backgroundColor: '#fff', borderRadius: 16, padding: 24, marginBottom: 18, shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 8, elevation: 2, alignItems: 'center' }}>
          <Text style={{ color: '#3CB4A6', fontWeight: 'bold', fontSize: 20, marginBottom: 8, textAlign: 'center' }}>Congratulations!!!</Text>
          <Text style={{ color: '#4C5DF4', fontWeight: 'bold', fontSize: 28, marginBottom: 6, textAlign: 'center' }}>John Doe</Text>
          <Text style={{ fontSize: 16, color: '#222', marginBottom: 16, textAlign: 'center' }}>
            Missing Number Series Questions for Bank Clerk Prelims Exam (Day -365)
          </Text>
          {/* Centered Circular Score */}
          <View style={{ alignItems: 'center', marginBottom: 18 }}>
            <View style={{ width: 110, height: 110, borderRadius: 55, borderWidth: 7, borderColor: '#3CB4A6', justifyContent: 'center', alignItems: 'center', marginBottom: 6 }}>
              <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#222', textAlign: 'center' }}>{`${userStats.score}/${userStats.total}`}</Text>
            </View>
            <Text style={{ fontWeight: 'bold', color: '#222', fontSize: 16, textAlign: 'center' }}>Score</Text>
          </View>
          {/* User Stats Row */}
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 10, gap: 16 }}>
            <View style={{ alignItems: 'center', marginHorizontal: 8 }}>
              <Ionicons name="medal-outline" size={20} color="#F9B233" style={{ marginBottom: 2 }} />
              <Text style={{ color: '#3CB4A6', fontWeight: 'bold', fontSize: 15 }}>{userStats.rank} <Text style={{ color: '#888', fontWeight: 'normal' }}>/ 88</Text></Text>
              <Text style={{ color: '#888', fontSize: 13 }}>Rank</Text>
            </View>
            <View style={{ alignItems: 'center', marginHorizontal: 8 }}>
              <Ionicons name="list-outline" size={20} color="#4C5DF4" style={{ marginBottom: 2 }} />
              <Text style={{ color: '#4C5DF4', fontWeight: 'bold', fontSize: 15 }}>{userStats.attempted} <Text style={{ color: '#888', fontWeight: 'normal' }}>/ 10</Text></Text>
              <Text style={{ color: '#888', fontSize: 13 }}>Attempted</Text>
            </View>
            <View style={{ alignItems: 'center', marginHorizontal: 8 }}>
              <Ionicons name="checkmark-done-outline" size={20} color="#F9B233" style={{ marginBottom: 2 }} />
              <Text style={{ color: '#F9B233', fontWeight: 'bold', fontSize: 15 }}>{userStats.accuracy}%</Text>
              <Text style={{ color: '#888', fontSize: 13 }}>Accuracy</Text>
            </View>
            <View style={{ alignItems: 'center', marginHorizontal: 8 }}>
              <Ionicons name="people-outline" size={20} color="#3CB4A6" style={{ marginBottom: 2 }} />
              <Text style={{ color: '#3CB4A6', fontWeight: 'bold', fontSize: 15 }}>{userStats.percentile}%</Text>
              <Text style={{ color: '#888', fontSize: 13 }}>Percentile</Text>
            </View>
            <View style={{ alignItems: 'center', marginHorizontal: 8 }}>
              <Ionicons name="time-outline" size={20} color="#4C5DF4" style={{ marginBottom: 2 }} />
              <Text style={{ color: '#4C5DF4', fontWeight: 'bold', fontSize: 15 }}>{userStats.time}</Text>
              <Text style={{ color: '#888', fontSize: 13 }}>Time</Text>
            </View>
          </View>
          {/* Solution & Reattempt Buttons */}
          <View style={{ flexDirection: 'row', gap: 16, marginTop: 10, width: '100%' }}>
            <TouchableOpacity style={{ flex: 1, backgroundColor: '#4C5DF4', borderRadius: 10, paddingVertical: 14, alignItems: 'center' }}>
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Solution</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, backgroundColor: '#3CB4A6', borderRadius: 10, paddingVertical: 14, alignItems: 'center' }}>
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Reattempt</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* 2. Section Analytics */}
        <View style={{ backgroundColor: '#fff', borderRadius: 16, padding: 24, marginBottom: 18, shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 8, elevation: 2 }}>
          <Text style={{ color: '#222', fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}>Sectional Analysis</Text>
          {/* Tabs */}
          <View style={{ flexDirection: 'row', marginBottom: 16 }}>
            {sectionTabs.map((tab, idx) => (
              <TouchableOpacity key={tab} onPress={() => setActiveTab(idx)} style={{ marginRight: 18, borderBottomWidth: activeTab === idx ? 3 : 0, borderColor: '#3CB4A6', paddingBottom: 4 }}>
                <Text style={{ color: activeTab === idx ? '#3CB4A6' : '#888', fontWeight: 'bold', fontSize: 16 }}>{tab}</Text>
              </TouchableOpacity>
            ))}
          </View>
          {/* Bar Chart */}
          <View style={{ marginTop: 10 }}>
            {barData.map((bar, idx) => (
              <View key={bar.label} style={{ marginBottom: 18 }}>
                <Text style={{ color: '#888', fontWeight: 'bold', fontSize: 16, marginBottom: 4 }}>{bar.label}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ height: 18, backgroundColor: '#eee', borderRadius: 8, flex: 1, marginHorizontal: 8, overflow: 'hidden' }}>
                    <View style={{ height: 18, width: `${(bar.value / bar.max) * 100}%`, backgroundColor: bar.color, borderRadius: 8 }} />
                  </View>
                  <Text style={{ color: '#888', fontWeight: 'bold', fontSize: 14, width: 50, textAlign: 'left' }}>{bar.max} / {bar.max}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
        {/* 3. Test Title Card */}
        <View style={{ backgroundColor: '#fff', borderRadius: 16, padding: 24, marginBottom: 18, shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 8, elevation: 2 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#222', marginBottom: 10, textAlign: 'center' }}>
            Missing Number Series Questions for Bank Clerk Prelims Exam (Day -365)
          </Text>
        </View>
        {/* 4. Leaderboard */}
        <View style={{ backgroundColor: '#fff', borderRadius: 16, padding: 24, marginBottom: 18, shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 8, elevation: 2 }}>
          <Text style={{ color: '#3CB4A6', fontWeight: 'bold', fontSize: 18, marginBottom: 10, textAlign: 'center' }}>Leader Board</Text>
          <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderColor: '#eee', paddingBottom: 6, marginBottom: 6 }}>
            <Text style={{ flex: 1, fontWeight: 'bold', color: '#444', textAlign: 'center' }}>Rank</Text>
            <Text style={{ flex: 3, fontWeight: 'bold', color: '#444', textAlign: 'center' }}>Name</Text>
            <Text style={{ flex: 1, fontWeight: 'bold', color: '#444', textAlign: 'center' }}>Score / 10</Text>
          </View>
          {leaderboard.map((row, idx) => (
            <View key={row.rank + row.name} style={{ flexDirection: 'row', paddingVertical: 4 }}>
              <Text style={{ flex: 1, color: '#222', textAlign: 'center' }}>{row.rank}</Text>
              <Text style={{ flex: 3, color: '#222', textAlign: 'center' }}>{row.name}</Text>
              <Text style={{ flex: 1, color: '#222', textAlign: 'center' }}>{row.score}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}