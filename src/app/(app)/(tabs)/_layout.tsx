import { Icon } from '@/src/components/Icon';
import { Colors } from '@/src/constants/Colors';
import { Tabs } from 'expo-router';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        sceneStyle: {
          backgroundColor: Colors.surface.main,
        },
        tabBarStyle: {
          backgroundColor: Colors.surface.container,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: Colors.primary.main,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => {
            return (
              <Icon
                name='Octicons'
                icon='home'
                color={color}
                size='medium'
              />
            );
          },
        }}
      />

      <Tabs.Screen
        name="categories"
        options={{
          lazy: false,
          title: 'Categorias',
          tabBarIcon: ({ color }) => {
            return (
              <Icon
                name='Feather'
                icon='folder'
                color={color}
                size='medium'
              />
            );
          },
        }}
      />

      <Tabs.Screen
        name="me"
        options={{
          title: 'Eu',
          tabBarIcon: ({ color }) => {
            return (
              <Icon
                name='Feather'
                icon='user'
                color={color}
                size='medium'
              />
            );
          },
        }}
      />
    </Tabs>
  );
}
