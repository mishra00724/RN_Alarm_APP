# AlarmApp

A minimalistic iOS alarm app built with React Native, designed to replicate the functionality of the default iOS Clock app's alarm feature.

## Features

- 📱 Interactive alarm list with add/delete functionality
- ⏰ Time picker for setting alarms
- 🔄 Repeat options for alarms
- 🏷️ Custom alarm labels
- 🔊 Sound selection
- 😴 Snooze toggle
- ✏️ Edit mode for managing alarms

## Prerequisites

Before you begin, ensure you have the following installed:

### Required Software
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Xcode** (latest version from App Store)
- **iOS Simulator** (comes with Xcode)
- **CocoaPods** (for iOS dependencies)

### Xcode Setup

1. **Install Xcode from the App Store**
   - Download and install the latest version of Xcode
   - This includes iOS Simulator and development tools

2. **Install Xcode Command Line Tools**
   ```sh
   xcode-select --install
   ```

3. **Accept Xcode License**
   ```sh
   sudo xcodebuild -license accept
   ```

4. **Set Xcode Path** (if needed)
   ```sh
   sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
   ```

5. **Install iOS Simulator**
   - Open Xcode
   - Go to Xcode → Preferences → Components
   - Download the latest iOS Simulator

## Getting Started

### 1. Clone the Repository

```sh
git clone https://github.com/<your-username>/AlarmApp.git
cd AlarmApp
```

### 2. Install Dependencies

```sh
# Install Node.js dependencies
npm install

# Install iOS dependencies (CocoaPods)
cd ios
pod install
cd ..
```

### 3. Start Metro Bundler

```sh
# Start the Metro bundler
npm start
# or
npx react-native start
```

### 4. Run the App

In a new terminal window:

```sh
# Run on iOS Simulator
npm run ios
# or
npx react-native run-ios
```

### 5. Alternative: Run from Xcode

1. Open `ios/AlarmApp.xcworkspace` in Xcode
2. Select your target device (iOS Simulator or physical device)
3. Click the "Run" button (▶️) or press `Cmd + R`

## Development Workflow

### Hot Reload
- The app will automatically reload when you save changes
- Press `Cmd + R` in the simulator to manually reload
- Press `Cmd + D` to open the developer menu

### Debugging
- Use React Native Debugger or Chrome DevTools
- Check Metro bundler console for JavaScript errors
- Check Xcode console for native errors

## Project Structure

```
AlarmApp/
├── src/
│   ├── components/     # Reusable UI components
│   ├── screens/        # App screens
│   ├── navigation/     # Navigation configuration
│   └── theme/          # Styling and theming
├── ios/                # iOS native code
├── android/            # Android native code (not used for iOS development)
└── package.json        # Dependencies and scripts
```

## Branches

- `main`: Production-ready code
- `DEV_himanshu`: Himanshu's development branch
- `DEV_Satyam`: Satyam's development branch

## Contributing

### For Team Members

1. **Clone the repository**
   ```sh
   git clone https://github.com/<your-username>/AlarmApp.git
   cd AlarmApp
   ```

2. **Switch to your development branch**
   ```sh
   git checkout DEV_himanshu    # or DEV_Satyam
   ```

3. **Create a feature branch** (optional)
   ```sh
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes and commit**
   ```sh
   git add .
   git commit -m "Add your feature description"
   ```

5. **Push to your branch**
   ```sh
   git push origin DEV_himanshu    # or your feature branch
   ```

6. **Create a Pull Request** to merge into `main`

### Code Style

- Use TypeScript for all new code
- Follow React Native best practices
- Use functional components with hooks
- Keep components small and focused

## Troubleshooting

### Common Issues

1. **Metro bundler not connecting**
   - Ensure Metro is running (`npm start`)
   - Check if the simulator can reach your computer's IP

2. **Build errors**
   - Clean build: `cd ios && xcodebuild clean && cd ..`
   - Reset cache: `npx react-native start --reset-cache`

3. **Pod install issues**
   - Update CocoaPods: `sudo gem install cocoapods`
   - Clean pods: `cd ios && pod deintegrate && pod install && cd ..`

4. **Xcode build errors**
   - Clean build folder in Xcode (Product → Clean Build Folder)
   - Check that all dependencies are properly linked

### Getting Help

- Check the [React Native documentation](https://reactnative.dev/docs/getting-started)
- Review the [Troubleshooting guide](https://reactnative.dev/docs/troubleshooting)
- Check Metro bundler console for JavaScript errors
- Check Xcode console for native errors

## Tech Stack

- **React Native** 0.80.1
- **React** 19.1.0
- **TypeScript** 5.0.4
- **React Navigation** 7.x
- **React Native Paper** (planned for UI components)

## License

This project is for educational purposes and learning iOS app development with React Native.
