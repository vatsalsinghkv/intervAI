import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center p-8'>
      <div className='max-w-2xl mx-auto text-center space-y-8'>
        {/* Hero Section */}
        <div className='space-y-4'>
          <h1 className='text-4xl md:text-6xl font-bold text-foreground'>
            Welcome to{' '}
            <span className='text-primary bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent'>
              interv.ai
            </span>
          </h1>
          <p className='text-lg md:text-xl text-muted-foreground max-w-lg mx-auto'>
            Your intelligent interview preparation platform powered by AI
          </p>
        </div>

        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <Button size='lg' className='w-full sm:w-auto'>
            Get Started
          </Button>
          <Button variant='outline' size='lg' className='w-full sm:w-auto'>
            Learn More
          </Button>
        </div>

        {/* Features Preview */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-16'>
          <div className='p-6 rounded-lg bg-card border border-border shadow-sm'>
            <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto'>
              <svg
                className='w-6 h-6 text-primary'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                aria-label='AI-Powered Practice icon'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
                />
              </svg>
            </div>
            <h3 className='font-semibold text-card-foreground mb-2'>
              AI-Powered Practice
            </h3>
            <p className='text-sm text-muted-foreground'>
              Practice with intelligent questions tailored to your role and
              experience level
            </p>
          </div>

          <div className='p-6 rounded-lg bg-card border border-border shadow-sm'>
            <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto'>
              <svg
                className='w-6 h-6 text-primary'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                aria-label='Real-time Feedback icon'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                />
              </svg>
            </div>
            <h3 className='font-semibold text-card-foreground mb-2'>
              Real-time Feedback
            </h3>
            <p className='text-sm text-muted-foreground'>
              Get instant feedback on your responses and improve your interview
              skills
            </p>
          </div>

          <div className='p-6 rounded-lg bg-card border border-border shadow-sm'>
            <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto'>
              <svg
                className='w-6 h-6 text-primary'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                aria-label='Track Progress icon'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 10V3L4 14h7v7l9-11h-7z'
                />
              </svg>
            </div>
            <h3 className='font-semibold text-card-foreground mb-2'>
              Track Progress
            </h3>
            <p className='text-sm text-muted-foreground'>
              Monitor your improvement with detailed analytics and performance
              insights
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
