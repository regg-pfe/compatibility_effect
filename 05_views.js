// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `Welcome to our experiment!
          <br />
          <br />
        Our goal is to investigate compatibility effects in cognitive representations by means of a simple key-press experiment.
          <br />
          <br />
        Please proceed to the experimental instructions when you feel ready - please only continue with the experiment if you are operating on a computer system with a keyboard (the experiment doesn't work with a touchscreen).
          <br />
          <br />
        (unfortunately we have to exclude all left-handed from participation so please only proceed if you confirm to be right-handed for the purpose of correctness of our study).
          <br />
        Good Luck!`,
  buttonText: 'Begin the experiment'
});

// For the whole experiment
const instructions_general = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_general',
  title: 'General Instructions',
  text: `You are going to be presented with a sequence of squares, which always correspond to one of two sizes - either small (2cmx2cm) or large (4cmx4cm).
          <br />
          <br />
        Depending on later instructions, you will be asked to press a key (Q or P) for the stimulus you perceive.
          <br />
          <br />
        Key presses are to be done with the index finger of the respective hand (left hand: Q ; right hand: P).
          <br />
          <br />
        The experiment consists of 4 blocks: one short practice phase to get aquainted with stimulus sizes and stimulus-key mappings,
          <br />
        followed by an experimental phase for the first mapping and respectively one short practice phase,
          <br />
        followed by an experimental phase for the second mapping.
          <br />
          <br />
        Please respond as quickly as possible, stay focused during the experimental block and do not pause too long between practice and experimental blocks.`,
  buttonText: 'Go to practice instructions'
});

// For the first practice when compatible is first
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'First practice',
  text: `Your task is to press Q if you see a small square, and to press P if you see a large square.
          <br />
          <br />
        Remember: Key presses are to be done with the index finger of the respective hand (left hand: Q ; right hand: P).
          <br />
          <br />
        Please respond as quickly as possible and stay focused during the experimental block.`,
  buttonText: 'Go to first practice'
});
// For second practice when incompatible is first
const instructions2 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions2',
  title: 'Second practice',
  text: `This time the keys will be swapped:
          <br />
        Press Q if you see a small square, and press P if you see a large square.
          <br />
          <br />
        Please respond as quickly as possible and stay focused during the experimental block.`,
  buttonText: 'Go to second practice'
});

// For first practice when incompatible is first
const instructions3 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions3',
  title: 'First practice',
  text: `Your task is to press Q if you see a large stimulus, and to press P if you see a small stimulus.
          <br />
          <br />
        Remember: Key presses are to be done with the index finger of the respective hand (left hand: Q ; right hand: P).
          <br />
          <br />
        Please respond as quickly as possible and stay focused during the experimental block.`,
  buttonText: 'Go to first practice'
});

// For second practice when compatible is first
const instructions4 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions4',
  title: 'Second practice',
  text: `This time the keys will be swapped:
          <br />
        Press Q if you see a large square, and press P if you see a small square.
          <br />
          <br />
        Please respond as quickly as possible and stay focused during the experimental block.`,
  buttonText: 'Go to second practice'
});


// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for participating in this experiment!',
  prolificConfirmText: 'Press the button'
});

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/

// little screen to announce the starting of the main trials
const begin = magpieViews.view_generator("begin", {
  trials: 1,
  name: 'begin',
  title: 'First experimental block',
  text: `Now the first experimental block will begin!
          <br />
          <br />
        Please respond as quickly as possible and stay focused`,
  buttonText: 'Go to first experimental block'
});

// same screen with a different name
const begin2 = magpieViews.view_generator("begin", {
  trials: 1,
  name: 'begin2',
  title: 'Second experimental block',
  text: `Now the second experimental block will begin!
          <br />
          <br />
          Please respond as quickly as possible and stay focused`,
  buttonText: 'Go to second experimental block'
});

// compatible first practice trials
const comp_practice = custom_views.keypress_custom({
  trials: 10,
  name: 'comp_practice',
  trial_type: 'compatible',
  pause: 1500,
  fix_duration: 1000,
  data: _.shuffle(samples.key_press),
  key1: 'q',
  key2: 'p',
  q: 'small',
  p: 'large',
  hook:{
    after_response_enabled: count_time
  }
});

// Compatible second practice trials
const comp_practice2 = custom_views.keypress_custom({
  trials: 20,
  name: 'comp_practice2',
  trial_type: 'compatible',
  pause: 1500,
  fix_duration: 1000,
  data: _.shuffle(samples.key_press),
  key1: 'q',
  key2: 'p',
  q: 'small',
  p: 'large',
  hook:{
    after_response_enabled: count_time
  }
});


// compatible main trials
const comp_trials = custom_views.keypress_custom({
  trials: 60,
  name: 'comp_trials',
  trial_type: 'compatible',
  pause: 1500,
  fix_duration: 1000,
  data: _.shuffle(samples.key_press),
  key1: 'q',
  key2: 'p',
  q: 'small',
  p: 'large',
  hook: {
    after_response_enabled: count_time
   }
});

// incompatible first practice
const incomp_practice = custom_views.keypress_custom({
  trials: 10,
  name: 'incomp_practice',
  trial_type: 'incompatible',
  pause: 1500,
  fix_duration: 1000,
  data: _.shuffle(samples.key_press),
  key1: 'q',
  key2: 'p',
  q: 'large',
  p: 'small',
  hook:{
    after_response_enabled: count_time
  }
});

// incompatible second practice
const incomp_practice2 = custom_views.keypress_custom({
  trials: 20,
  name: 'incomp_practice2',
  trial_type: 'incompatible',
  pause: 1500,
  fix_duration: 1000,
  data: _.shuffle(samples.key_press),
  key1: 'q',
  key2: 'p',
  q: 'large',
  p: 'small',
  hook:{
    after_response_enabled: count_time
  }
});

// incompatible main trials
const incomp_trials = custom_views.keypress_custom({
  trials: 60,
  name: 'incomp_trials',
  trial_type: 'incompatible',
  pause: 1500,
  fix_duration: 1000,
  data: _.shuffle(samples.key_press),
  key1: 'q',
  key2: 'p',
  q: 'large',
  p: 'small',
  hook:{
    after_response_enabled: count_time
  }
});

// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
