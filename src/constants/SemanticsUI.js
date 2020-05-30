const transitions = {
  browse: { key: 'browse', value: 'browse', text: 'browse' },
  browseRight: { key: 'browse right', value: 'browse right', text: 'browse right' },
  drop: { key: 'drop', value: 'drop', text: 'drop' },
  fade: { key: 'fade', value: 'fade', text: 'fade' },
  fadeUp: { key: 'fade up', value: 'fade up', text: 'fade up' },
  fadeDown: { key: 'fade down', value: 'fade down', text: 'fade down' },
  fadeLeft: { key: 'fade left', value: 'fade left', text: 'fade left' },
  fadeRight: { key: 'fade right', value: 'fade right', text: 'fade right' },
  flyUp: { key: 'fly up', value: 'fly up', text: 'fly up' },
  flyDown: { key: 'fly down', value: 'fly down', text: 'fly down' },
  flyLeft: { key: 'fly left', value: 'fly left', text: 'fly left' },
  flyRight: { key: 'fly right', value: 'fly right', text: 'fly right' },
  horizontalFlip: { key: 'horizontal flip', value: 'horizontal flip', text: 'horizontal flip' },
  verticalFlip: { key: 'vertical flip', value: 'vertical flip', text: 'vertical flip' },
  scale: { key: 'scale', value: 'scale', text: 'scale' },
  slideUp: { key: 'slide up', value: 'slide up', text: 'slide up' },
  slideDown: { key: 'slide down', value: 'slide down', text: 'slide down' },
  slideLeft: { key: 'slide left', value: 'slide left', text: 'slide left' },
  slideRight: { key: 'slide right', value: 'slide right', text: 'slide right' },
  swingUp: { key: 'swing up', value: 'swing up', text: 'swing up' },
  swingDown: { key: 'swing down', value: 'swing down', text: 'swing down' },
  swingLeft: { key: 'swing left', value: 'swing left', text: 'swing left' },
  swingRight: { key: 'swing right', value: 'swing right', text: 'swing right' },
  zoom: { key: 'zoom', value: 'zoom', text: 'zoom' },
}

/**
 * List of transition options used inside semantics ui
 */
export const TransitionOptions = Object.values(transitions);

/**
 * Map of transition object used in the semantics ui
 * 
 * @see https://react.semantic-ui.com/modules/transition/#explorers-group-explorer
 */
export const TransitionOptionsMap = { ...transitions };