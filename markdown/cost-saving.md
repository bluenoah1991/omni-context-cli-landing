---
slug: /tutorial/cost-saving
title: Cost Saving Guide
sidebar_label: Cost Saving Guide
sidebar_position: 15
---

# Cost Saving Guide

Running large language models can get expensive, especially for extended conversations and complex tasks. This guide covers practical techniques to reduce costs while maintaining quality.

## Understanding Cost Factors

LLM costs are primarily driven by:

- **Request frequency**: Every API call resends your conversation history
- **Context size**: Larger contexts consume more tokens
- **Cache hits**: Proper caching reduces repeated token processing

## Leverage Specialist Mode

Specialist mode is one of the most effective cost-saving features in Omx. It uses **Agentic tools** instead of basic tools to optimize both request count and context quality.

### How Specialist Mode Saves Money

**Reduced Request Rounds**

- Basic tools often require multiple sequential calls to complete a task
- Agentic tools aggregate multiple operations into a single call
- Fewer requests mean fewer full-context transmissions

**Less Context Noise**

- Basic tools return intermediate outputs that clutter your conversation
- Agentic tools provide only the final, relevant results
- Cleaner context means more efficient token usage

### Recommended Configuration

```
Main Model: Opus 4.5 (or similar high-end model)
Agent Model: GLM-4.7 (or similar cost-effective model)
```

This combination gives you the best of both worlds: powerful reasoning for complex tasks with economical execution of routine operations.

### The Key to Effective Model Pairing

Combining high-end models with cost-effective models is a common cost optimization strategy. However, pairing a 90-point model with a 60-point model poorly can yield results below 80 points.

The critical factor is to prevent the cost-effective model from participating in decision-making. Instead, restrict it to handling the "dirty work" — routine execution tasks that don't require advanced reasoning.

Agentic tools represent the optimal division of labor, refined through extensive experimentation. They ensure that your powerful model focuses on high-level strategy and decision-making while delegating repetitive operations to the economical model.

## Optimize Cache TTL

When working on complex problems that require extended thinking time, adjust your cache TTL setting:

### Why 1-Hour Cache Works Better

- **5-minute cache** (default): Expires quickly if you pause to think or research
- **1-hour cache**: Stays valid throughout your problem-solving session

While 1-hour caches have higher creation costs, they eliminate repeated cache rebuilding during longer conversations. For complex tasks, this is significantly more cost-effective.

**When to use 1-hour cache:**
- Debugging complex issues
- Multi-step refactoring
- Research and analysis tasks
- Any work requiring extended focus

## Trim Thinking Blocks

Advanced models like Opus 4.5 include detailed thinking blocks that show their reasoning process. While valuable for transparency, they significantly increase context size.

### The Impact

Thinking blocks can consume 30-50% of your context in extended conversations. Trimming them:

- Reduces token consumption per request
- Keeps your conversation focused on results
- Maintains context for more messages before compression is needed

Omx automatically handles thinking block optimization so you get the benefits without manual management.

## Optimized System Design

OmniContext CLI is engineered for efficiency:

- **Streamlined system prompts**: Minimal, focused instructions
- **Concise tool descriptions**: Only essential information
- **Efficient context management**: Smart compression and editing

This design philosophy ensures that your tokens are used for your actual work, not bloated framework overhead.

## Summary of Best Practices

1. **Enable specialist mode** for complex tasks
2. **Use high-end main models** with cost-effective agent models
3. **Set cache to 1-hour** for extended problem-solving sessions
4. **Let Omx trim thinking blocks** automatically

These techniques work together to maximize value while minimizing unnecessary expenses.
