import { useState } from 'react';
import { BookOpen, FileText, CheckSquare, BarChart3, Lightbulb, Video, Menu, X } from 'lucide-react';

export default function EnglishLearning() {
  const [activeTab, setActiveTab] = useState('lessons');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const lessons = [
    {
      id: 1,
      title: 'Present Simple Tense',
      description: 'Learn how to form and use the present simple tense',
      level: 'Beginner',
      duration: '15 min'
    },
    {
      id: 2,
      title: 'Past Continuous',
      description: 'Master the past continuous tense with examples',
      level: 'Intermediate',
      duration: '20 min'
    },
    {
      id: 3,
      title: 'Phrasal Verbs',
      description: 'Common phrasal verbs and their meanings',
      level: 'Intermediate',
      duration: '25 min'
    }
  ];

  const vocabulary = [
    { word: 'Eloquent', meaning: 'Fluent or persuasive in speaking or writing', example: 'She gave an eloquent speech.' },
    { word: 'Serendipity', meaning: 'The occurrence of events by chance in a happy or beneficial way', example: 'Meeting him was pure serendipity.' },
    { word: 'Ephemeral', meaning: 'Lasting for a very short time', example: 'The beauty of cherry blossoms is ephemeral.' },
    { word: 'Pragmatic', meaning: 'Dealing with things in a practical, realistic way', example: 'We need a pragmatic approach.' },
    { word: 'Ubiquitous', meaning: 'Present, appearing, or found everywhere', example: 'Smartphones are ubiquitous in modern society.' }
  ];

  const assignments = [
    {
      id: 1,
      title: 'Write a Paragraph',
      description: 'Write about your favorite hobby (200-300 words)',
      dueDate: '2026-09-10',
      status: 'Pending'
    },
    {
      id: 2,
      title: 'Listening Exercise',
      description: 'Listen to the audio and answer 10 questions',
      dueDate: '2026-09-08',
      status: 'Pending'
    },
    {
      id: 3,
      title: 'Grammar Quiz',
      description: 'Complete the present perfect tense exercises',
      dueDate: '2026-09-05',
      status: 'Submitted'
    }
  ];

  const studentGrades = [
    { name: 'Ahmed Hassan', oral: 85, written: 78, assignment: 82, average: 81.7 },
    { name: 'Fatima Ali', oral: 92, written: 88, assignment: 90, average: 90 },
    { name: 'Mohammed Ibrahim', oral: 78, written: 85, assignment: 80, average: 81 },
    { name: 'Layla Karim', oral: 88, written: 92, assignment: 95, average: 91.7 },
    { name: 'Karim Ahmed', oral: 75, written: 72, assignment: 76, average: 74.3 }
  ];

  const tests = [
    {
      id: 1,
      title: 'Midterm Exam',
      date: '2026-09-15',
      duration: '60 min',
      topics: 'Tenses, Vocabulary, Reading Comprehension'
    },
    {
      id: 2,
      title: 'Unit 3 Test',
      date: '2026-09-20',
      duration: '45 min',
      topics: 'Phrasal Verbs, Listening, Speaking'
    }
  ];

  const tips = [
    {
      icon: '🎧',
      title: 'Listen Daily',
      description: 'Listen to English podcasts, songs, and movies to improve pronunciation and comprehension.'
    },
    {
      icon: '📚',
      title: 'Read Regularly',
      description: 'Read books, articles, and news in English to expand your vocabulary.'
    },
    {
      icon: '✍️',
      title: 'Write Every Day',
      description: 'Keep a journal or write emails in English to practice writing skills.'
    },
    {
      icon: '🗣️',
      title: 'Speak Out Loud',
      description: 'Practice speaking with friends or use language exchange apps.'
    },
    {
      icon: '🎯',
      title: 'Set Goals',
      description: 'Set realistic and specific goals for your English learning journey.'
    },
    {
      icon: '🔄',
      title: 'Review Regularly',
      description: 'Revisit previous lessons and vocabulary to reinforce learning.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-800">English Academy</h1>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-600"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            {['lessons', 'vocabulary', 'assignments', 'grades', 'tests', 'tips'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-blue-100'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-blue-50 px-4 py-4 flex flex-col gap-2">
            {['lessons', 'vocabulary', 'assignments', 'grades', 'tests', 'tips'].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setMobileMenuOpen(false);
                }}
                className={`px-4 py-2 rounded-lg font-medium text-left transition-colors ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-blue-100'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Lessons Tab */}
        {activeTab === 'lessons' && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <Video className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-800">English Lessons</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lessons.map((lesson) => (
                <div key={lesson.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-32 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{lesson.title}</h3>
                    <p className="text-gray-600 mb-4">{lesson.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{lesson.level}</span>
                      <span className="text-sm text-gray-500">{lesson.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Vocabulary Tab */}
        {activeTab === 'vocabulary' && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <FileText className="w-8 h-8 text-green-600" />
              <h2 className="text-3xl font-bold text-gray-800">Vocabulary</h2>
            </div>
            <div className="grid gap-4">
              {vocabulary.map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold text-lg">{item.word[0]}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800">{item.word}</h3>
                      <p className="text-gray-600 mt-1"><strong>Meaning:</strong> {item.meaning}</p>
                      <p className="text-gray-600 mt-2"><strong>Example:</strong> <em>{item.example}</em></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Assignments Tab */}
        {activeTab === 'assignments' && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <CheckSquare className="w-8 h-8 text-purple-600" />
              <h2 className="text-3xl font-bold text-gray-800">Assignments & Homework</h2>
            </div>
            <div className="grid gap-4">
              {assignments.map((assignment) => (
                <div key={assignment.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-800">{assignment.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      assignment.status === 'Submitted'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {assignment.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{assignment.description}</p>
                  <p className="text-sm text-gray-500">📅 Due: {assignment.dueDate}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Grades Tab */}
        {activeTab === 'grades' && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <BarChart3 className="w-8 h-8 text-orange-600" />
              <h2 className="text-3xl font-bold text-gray-800">Student Grades</h2>
            </div>
            <div className="overflow-x-auto bg-white rounded-lg shadow-md">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Student Name</th>
                    <th className="px-6 py-4 text-center font-bold">Oral (%)
                    </th>
                    <th className="px-6 py-4 text-center font-bold">Written (%)</th>
                    <th className="px-6 py-4 text-center font-bold">Assignment (%)</th>
                    <th className="px-6 py-4 text-center font-bold">Average (%)</th>
                  </tr>
                </thead>
                <tbody>
                  {studentGrades.map((student, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-medium text-gray-800">{student.name}</td>
                      <td className="px-6 py-4 text-center text-gray-700">{student.oral}</td>
                      <td className="px-6 py-4 text-center text-gray-700">{student.written}</td>
                      <td className="px-6 py-4 text-center text-gray-700">{student.assignment}</td>
                      <td className="px-6 py-4 text-center">
                        <span className={`font-bold px-3 py-1 rounded-full ${
                          student.average >= 85
                            ? 'bg-green-100 text-green-700'
                            : student.average >= 75
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {student.average.toFixed(1)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tests Tab */}
        {activeTab === 'tests' && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <CheckSquare className="w-8 h-8 text-red-600" />
              <h2 className="text-3xl font-bold text-gray-800">Exams & Tests</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {tests.map((test) => (
                <div key={test.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-red-500">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{test.title}</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700"><strong>📅 Date:</strong> {test.date}</p>
                    <p className="text-gray-700"><strong>⏱️ Duration:</strong> {test.duration}</p>
                    <p className="text-gray-700"><strong>📚 Topics:</strong> {test.topics}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tips Tab */}
        {activeTab === 'tips' && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <Lightbulb className="w-8 h-8 text-yellow-600" />
              <h2 className="text-3xl font-bold text-gray-800">Learning Tips & Advice</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tips.map((tip, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-3">{tip.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{tip.title}</h3>
                  <p className="text-gray-600">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2026 English Academy. All rights reserved.</p>
          <p className="text-gray-500 mt-2">Learn English, Achieve Your Dreams!</p>
        </div>
      </footer>
    </div>
  );
}
