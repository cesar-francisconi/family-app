import { Tabs } from 'expo-router';

export default function TabLayout() {

  return (
    <Tabs>
      <Tabs.Screen
        options={{
          title: 'Home',
        }}
        name="index"
      />
    </Tabs>
  );
}
